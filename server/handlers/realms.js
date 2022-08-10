// Realm related handlers will be hosted here.

// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Require helper functions.
const { realmsUri } = require("../helpers/blizzard");

// Get the proper realm slug given a realm name.
const getSlug = async (req, res) => {
  // Query must use underscores in place of spaces.
  const realm = req.query.realm.replaceAll("_", " ");

  try {
    // Fetch the realm data from the API.
    const response = await (await fetch(realmsUri())).json();
    const realms = response.realms;

    const match = realms.find((element) => {
      return element.name.toLowerCase() === realm.toLowerCase();
    });

    // Verify that a match was found and respond appropriately.
    if (match) {
      return res.status(200).json({ status: 200, data: { slug: match.slug } });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "No realm found.", data: { realm } });
    }
  } catch (e) {
    console.error("Error getting realm slug:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
    });
  }
};

module.exports = { getSlug };
