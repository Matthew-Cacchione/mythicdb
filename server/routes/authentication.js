// Authentication related routes will be hosted here.
const router = require("express").Router();

// Require authentication handlers.
const { getUser, signIn, signUp } = require("../handlers/authentication");

// #Endpoints.

// Get the user data given an id.
router.get("/api/users/:_id", getUser);

// Sign up a new user.
router.post("/api/users", signUp);

// Log the user in.
router.post("/api/users/signIn", signIn);

module.exports = router;
