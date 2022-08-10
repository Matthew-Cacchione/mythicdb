// Affix related handlers will be hosted here.

// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Require helper functions.
const { affixUri, affixMediaUri } = require("../helpers/blizzard");

// Keep the rotation as an array of ids.
const rotation = [10, 8, 12, 131];

// Get the affix data given an id.
const getAffix = async (req, res) => {
  const { id } = req.params;

  try {
    const affix = await (await fetch(affixUri(id))).json();
    const media = await (await fetch(affixMediaUri(id))).json();

    // Respond with a 404 if the affix wasn't found.
    if (affix.code === 404 || media.code === 404) {
      return res
        .status(404)
        .json({ status: 404, message: "Affix not found.", data: { id } });
    }

    // Extract the required data from the fetches.
    const { name, description } = affix;
    const imgSrc = media.assets[0].value;

    return res.status(200).json({
      status: 200,
      data: { name, description, imgSrc },
    });
  } catch (e) {
    console.error("Error occurred fetching affix:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
    });
  }
};

// Get the affixes in rotation this week.
const getAffixRotation = (req, res) => {
  return res.status(200).json({ status: 200, data: { rotation } });
};

module.exports = { getAffix, getAffixRotation };
