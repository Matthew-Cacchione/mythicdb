// Character related routes will be hosted here.
const router = require("express").Router();

// Require character handlers.
const {
  getCharacter,
  getSearchableCharacters,
} = require("../handlers/characters");

// #Endpoints.

// Get the character data.
router.get("/api/characters", getCharacter);

// Get the characters that can be searched for.
router.get("/api/characters/search", getSearchableCharacters);

module.exports = router;
