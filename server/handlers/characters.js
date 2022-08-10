// Character related handlers will be hosted here.

// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Require helper functions.
const { capitalize } = require("../helpers/strings");
const {
  characterUri,
  characterMediaUri,
  mythicPlusUri,
} = require("../helpers/blizzard");

// Retrieve the given character's data from the API.
const getCharacter = async (req, res) => {
  const { name, realm } = req.query;

  try {
    // Fetch the character's profile, media, and mythic plus data from the API.
    const mplus = await (await fetch(mythicPlusUri(name, realm))).json();
    const profile = await (await fetch(characterUri(name, realm))).json();
    const media = await (await fetch(characterMediaUri(name, realm))).json();

    // If no character was found return a 404.
    if (mplus.code === 404 || profile.code === 404) {
      return res.status(404).json({
        status: 404,
        message: "Character not found.",
        data: { name: capitalize(name), realm: capitalize(realm) },
      });
    }

    // Extract the required profile data from the response.
    const {
      active_spec: { name: spec },
      character_class: { name: character_class },
      faction: { name: faction },
      guild: { name: guild } = { name: null },
      name: character_name,
      race: { name: race },
      realm: { name: character_realm },
    } = profile;

    // Extract the required mythic plus data from the response.
    const { rating, color: rating_color } = mplus.mythic_rating;

    // Extract the media from the response.
    const img_src = media.assets[2].value;

    // Respond with the required data.
    return res.status(200).json({
      status: 200,
      data: {
        profile: {
          name: character_name,
          realm: character_realm,
          faction,
          race,
          class: character_class,
          spec,
          guild,
          img_src,
        },
        mythic_plus: { rating, rating_color },
      },
    });
  } catch (e) {
    console.error("Error fetching character:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
      data: { name, realm },
    });
  }
};

module.exports = { getCharacter };