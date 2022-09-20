// Allows the use of the fetch API in Node.
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Set required fetch options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Get the current affixes in rotation.
const getAffixes = async (req, res) => {
  // Extract the required data from the request.
  const { region } = req.query;

  // Set the URI for the fetch based on the region requested.
  const uri = `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=en`;

  try {
    const response = await (await fetch(uri, options)).json();

    // Verify that the region provided exists.
    if (response.statusCode === 400) {
      return res.status(400).json({
        status: 400,
        message: "No region found.",
        data: { region },
      });
    }

    // Extract the required data from the response.
    const affixes = response.affix_details;

    return res.status(200).json({ status: 200, data: { affixes } });
  } catch (e) {
    console.error("Error getting affixes:", e);
    return res.status(500).json({
      status: 500,
      message: "An unknown error occurred.",
      data: { region },
    });
  }
};

module.exports = { getAffixes };
