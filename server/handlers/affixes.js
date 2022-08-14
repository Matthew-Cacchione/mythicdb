// Affix related handlers will be hosted here.

// Require constants.
const { AFFIX_ROTATION, AFFIXES } = require("../constants");

// Get the affix data given an id.
const getAffix = async (req, res) => {
  const { id } = req.params;

  try {
    const affix = AFFIXES.find((affix) => affix.id === Number(id));

    // Respond with a 404 if the affix wasn't found.
    if (!affix) {
      return res
        .status(404)
        .json({ status: 404, message: "Affix not found.", data: { id } });
    }

    // Extract the required data.
    const { name, description, imgSrc } = affix;

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
  return res
    .status(200)
    .json({ status: 200, data: { rotation: AFFIX_ROTATION } });
};

module.exports = { getAffix, getAffixRotation };
