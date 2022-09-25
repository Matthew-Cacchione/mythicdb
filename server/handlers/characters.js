// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Require helper functions.
const { capitalize } = require("../helpers/strings");

// Set required fetch options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Handlers.

// Retrieve the given character's data from the API.
const getCharacter = async (req, res) => {
  const { name, realm, region } = req.query;

  // Set the fetch URI based on the query.
  const uri = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=guild%2Cmythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_best_runs`;

  try {
    // Fetch the character's data from the API.
    const response = await (await fetch(uri, options)).json();

    // Verify if the API returned a bad request.
    if (response.statusCode === 400) {
      switch (response.message) {
        // Properly return a 404 if the character is not found.
        case "Could not find requested character":
          return res.status(404).json({
            status: 404,
            message: "No character found.",
          });

        default:
          return res.status(400).json({
            status: 400,
            message: response.message,
          });
      }
    }

    // Extract the required data from the response.
    const {
      name: character_name,
      thumbnail_url,
      race: character_race,
      class: character_class,
      active_spec_name: character_spec,
      faction: character_faction,
      realm: character_realm,
      guild: character_guild,
      mythic_plus_scores_by_season,
      mythic_plus_best_runs,
    } = response;

    // Simplify the best run data for the response.
    const bestRuns = mythic_plus_best_runs.map((run) => {
      return { dungeon: run.dungeon, level: run.mythic_level };
    });

    // Respond with the required data.
    return res.status(200).json({
      status: 200,
      data: {
        character: {
          name: character_name,
          thumbnail: thumbnail_url,
          race: character_race,
          class: character_class,
          spec: character_spec,
          faction: capitalize(character_faction),
          realm: character_realm,
          guild: character_guild.name,
        },
        mythic_plus: {
          score: mythic_plus_scores_by_season[0].segments.all.score,
          color: mythic_plus_scores_by_season[0].segments.all.color,
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
  }
};

module.exports = { getCharacter };
