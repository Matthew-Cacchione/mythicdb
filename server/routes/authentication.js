// Authentication related routes will be hosted here.
const router = require("express").Router();

// Require token authentication middleware.
const { authenticateToken } = require("../helpers/tokens");

// Require authentication handlers.
const {
  changePassword,
  deleteUser,
  getUser,
  setMainCharacter,
  signIn,
  signUp,
} = require("../handlers/authentication");

// #Endpoints.

// Delete the user with given access token.
router.delete("/api/user", authenticateToken, deleteUser);

// Get the user data with given access token.
router.get("/api/user", authenticateToken, getUser);

// Change the user's password given access token.
router.patch("/api/user", authenticateToken, changePassword);

// Set the user's main character.
router.patch("/api/user/main-character", authenticateToken, setMainCharacter);

// Sign up a new user.
router.post("/api/users", signUp);

// Log the user in.
router.post("/api/users/signIn", signIn);

module.exports = router;
