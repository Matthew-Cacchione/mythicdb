// Required packages.
const router = require("express").Router();

// Required handlers.
const {
  getCharacter,
  getSearchableCharacters,
} = require("../handlers/characters");

// Get a character.
router.get("/api/characters", getCharacter);

// Get the characters that can be searched for.
router.get("/api/characters/search", getSearchableCharacters);

export default router;
