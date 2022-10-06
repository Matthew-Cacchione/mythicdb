// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Require MongoDB related functions.
const { MongoClient } = require("mongodb");

// Require environment variables.
require("dotenv").config();
const { MONGO_URI } = process.env;

// Require helper functions.
const { capitalize } = require("../helpers/strings");

// Set required fetch options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Set MongoDB options.
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Handlers.

// Retrieve the given character's data from the API.
const getCharacter = async (req, res) => {
  const client = new MongoClient(MONGO_URI, mongoOptions);
  const { name, realm, region } = req.query;

  // If any parameters are missing respond with a bad request.
  if (!name || !realm || !region) {
    return res.status(400).json({
      status: 400,
      message: "Request is missing data.",
    });
  }

  // Set the fetch URI based on the query.
  const uri = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=guild%2Cmythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_best_runs`;

  try {
    await client.connect();
    const collection = client.db("master").collection("characters");

    // Fetch the character's data from the API.
    const response = await (await fetch(uri, options)).json();

    // Verify if the API returned a bad request.
    if (response.statusCode === 400) {
      return res.status(400).json({
        status: 400,
        message: response.message.concat("."),
      });
    }

    // Extract the required data from the response.
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
    } = response;

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
      const document = {
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
      .map((run) => {
        return { dungeon: run.dungeon, level: run.mythic_level };
      })
      // Sort runs by keystone level in descending order.
      .sort((a, b) => {
        return b.level - a.level;
      });

    // Respond with the required data.
    return res.status(200).json({
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
  } catch (e) {
    console.error("Error fetching character:", e);
    return res.status(500).json({
      status: 500,
      message: "An unknown error occurred.",
      data: { name, realm, region },
    });
  } finally {
    client.close();
  }
};

// Get a list of searchable characters from the server.
const getSearchableCharacters = async (req, res) => {
  const client = new MongoClient(MONGO_URI, mongoOptions);

  try {
    await client.connect();
    const characters = client.db("master").collection("characters");

    // Fetch the characters from MongoDB.
    const response = await characters.find().toArray();

    return res.status(200).json({ status: 200, data: response });
  } catch (err) {
    console.error("Error fetching searchable characters:", err);
    return res.status(500).json({
      status: 500,
      message: "An unknown error occurred.",
    });
  } finally {
    client.close();
  }
};

module.exports = { getCharacter, getSearchableCharacters };
