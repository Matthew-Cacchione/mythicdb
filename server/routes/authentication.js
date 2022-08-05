// Authentication related routes will be hosted here.
const router = require("express").Router();

// Require authentication handlers.
const {
  changePassword,
  deleteUser,
  getUser,
  signIn,
  signUp,
} = require("../handlers/authentication");

// #Endpoints.

// Delete the user with given id.
router.delete("/api/users/:_id", deleteUser);

// Get the user data given an id.
router.get("/api/users/:_id", getUser);

// Change the user's password.
router.patch("/api/users/:_id", changePassword);

// Sign up a new user.
router.post("/api/users", signUp);

// Log the user in.
router.post("/api/users/signIn", signIn);

module.exports = router;
