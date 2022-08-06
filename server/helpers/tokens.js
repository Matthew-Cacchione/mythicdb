// Helper functions relating to json web tokens.
const jwt = require("jsonwebtoken");

// Require environment variables.
require("dotenv").config();
const { ACCESS_TOKEN_SECRET } = process.env;

// Acts as middleware to authenticate user token before hitting certain endpoints.
const authenticateToken = (req, res, next) => {
  const header = req.headers["authorization"];

  // Extract the token from the request header.
  const token = header && header.split(" ")[1];

  // Verify that the token exists.
  if (!token) {
    return res
      .status(401)
      .json({ status: 401, message: "No authentication token provided." });
  }

  // Verify that the token is correct and respond appropriately.
  try {
    const user = jwt.verify(token, ACCESS_TOKEN_SECRET);

    // Send the authenticated user to the endpoint.
    req.user = user;
    next();
  } catch (e) {
    console.error("Error authenticating token:", e);

    switch (e.message) {
      case "invalid token":
        return res
          .status(403)
          .json({ status: 403, message: "Forbidden token.", data: { token } });

      default:
        return res.status(500).json({
          status: 500,
          message: "Something went wrong, please try again.",
        });
    }
  }
};

module.exports = { authenticateToken };
