import axios from "axios";

import { Response as ApiResponse } from "../models/api/Response";
import { Response, Request } from "express";

// Set required axios options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Get the current affixes in rotation.
const getAffixes = async (req: Request, res: Response) => {
  // Extract the required data from the request.
  const { region } = req.query;

  // If no region was provided respond with a bad request.
  if (!region) {
    return res.status(400).json({
      status: 400,
      message: "Request is missing data.",
    });
  }

  // Set the URI for the fetch based on the region requested.
  const uri = `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=en`;

  try {
    const response: ApiResponse = await (await axios(uri, options)).data;

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

export { getAffixes };
