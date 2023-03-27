// Required packages.
import axios from "axios";
import { MongoClient, OptionalId } from "mongodb";

// Required models.
import { Character } from "../models/server/Character";
import { Response, Request } from "express";
import { Run } from "../models/api/Run";

// Required environment variables.
require("dotenv").config();
const { MONGO_URI } = process.env;

// Required helper functions.
const { capitalize } = require("../helpers/strings");

// Set axios options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Retrieve the given character's data from the API.
const getCharacter = async (request: Request, response: Response) => {
  const client = new MongoClient(MONGO_URI!);
  const { name, realm, region } = request.query;

  // If any parameters are missing respond with a bad request.
  if (!name || !realm || !region) {
    return response.status(400).json({
      status: 400,
      message: "Request query is missing data.",
      data: {
        name: name || "<character name>",
        realm: realm || "<realm slug>",
        region: region || "<region code>",
      },
    });
  }

  // Set the fetch URI based on the query.
  const uri = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=guild%2Cmythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_best_runs`;

  try {
    await client.connect();
    const collection = client.db("master").collection<Character>("characters");

    // Fetch the character's data from the API.
    const data = await (await axios(uri, options)).data;

    const {
      active_spec_name: characterSpec,
      class: characterClass,
      faction,
      guild,
      mythic_plus_scores_by_season: mythicPlusScores,
      mythic_plus_best_runs: mythicPlusBestRuns,
      name,
      race,
      realm,
      region,
      thumbnail_url,
    } = data;

    // Check if the character is already in MongoDB.
    const characters = await collection.find().toArray();

    const isInDatabase = characters.some((character) => {
      const isNameMatch = character.name === name;
      const isRealmMatch = character.realm === realm;
      const isRegionMatch = character.region === region.toUpperCase();

      return isNameMatch && isRealmMatch && isRegionMatch;
    });

    // If the character was not in Mongo then create a document.
    if (!isInDatabase) {
      const document: OptionalId<Character> = {
        name,
        realm,
        region: region.toUpperCase(),
        faction: capitalize(faction),
        thumbnail: `/assets/classicon_${characterClass
          .toLowerCase()
          .replace(" ", "")}.png`,
      };

      await collection.insertOne(document);
    }

    // Simplify the best run data for the response.
    const bestRuns = mythicPlusBestRuns
      .sort((run1: Run, run2: Run) => {
        return run2.mythic_level - run1.mythic_level;
      })
      .map((run: Run) => {
        return { dungeon: run.dungeon, level: run.mythic_level };
      });

    // Respond with the required data.
    return response.status(200).json({
      status: 200,
      data: {
        character: {
          class: characterClass,
          faction: capitalize(faction),
          guild: guild ? guild.name : "",
          name,
          race,
          realm,
          region: region.toUpperCase(),
          spec: characterSpec,
          thumbnail: thumbnail_url,
        },
        mythic_plus: {
          color: mythicPlusScores[0].segments.all.color,
          score: mythicPlusScores[0].segments.all.score,
          bestRuns,
        },
      },
    });
  } catch (error: any) {
    switch (error.response.status) {
      case 400:
        return response.status(400).json({
          status: 400,
          message: error.response.data.message.concat("."),
        });

      default:
        console.error("Error fetching character:", error);
        return response.status(500).json({
          status: 500,
          message: "An unknown error occurred.",
          data: { name, realm, region },
        });
    }
  } finally {
    client.close();
  }
};

// Get a list of searchable characters from the server.
const getSearchableCharacters = async (
  request: Request,
  response: Response
) => {
  const client = new MongoClient(MONGO_URI!);

  try {
    await client.connect();
    const characters = client.db("master").collection("characters");

    // Fetch the characters from MongoDB.
    const data = await characters.find().toArray();

    return response.status(200).json({ status: 200, data });
  } catch (error) {
    console.error("Error fetching searchable characters:", error);
    return response.status(500).json({
      status: 500,
      message: "An unknown error occurred.",
    });
  } finally {
    client.close();
  }
};

export { getCharacter, getSearchableCharacters };
