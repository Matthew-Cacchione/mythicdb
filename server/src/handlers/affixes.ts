// Required packages.
import axios from "axios";

// Required types.
import { Response as ApiResponse } from "../models/api/Response";
import { Response, Request } from "express";

// Set axios options.
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Get the current affixes in rotation.
const getAffixes = async (request: Request, response: Response) => {
  const { region } = request.query;

  // Set the URI for the fetch based on the region requested.
  const uri = `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=en`;

  try {
    const data: ApiResponse = await (await axios(uri, options)).data;

    // Extract the required data from the response.
    const affixes = data.affix_details;

    return response.status(200).json({ status: 200, data: { affixes } });
  } catch (error: any) {
    console.error("Error getting affixes:", error);
    switch (error.response.status) {
      case 400:
        return response.status(404).json({
          status: 404,
          message: "No region found.",
          data: { region },
        });

      default:
        return response.status(500).json({
          status: 500,
          message: "An unknown error occurred.",
          data: { region },
        });
    }
  }
};

export { getAffixes };
