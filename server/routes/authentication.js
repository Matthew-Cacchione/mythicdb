// Authentication related routes will be hosted here.
const router = require("express").Router();

// Require authentication handlers.
const { getUser, signIn } = require("../handlers/authentication");

// #Endpoints.

// Get the user data given an id.
router.get("/api/users/:_id", getUser);

// Log the user in.
router.post("/api/users/signIn", signIn);

module.exports = router;
