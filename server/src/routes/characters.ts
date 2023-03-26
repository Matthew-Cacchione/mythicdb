// Required packages.
const router = require("express").Router();

// Required handlers.
const {
  getCharacter,
  getSearchableCharacters,
} = require("../handlers/characters");

// Get a character.
router.get("/api/character", getCharacter);

// Get the characters that can be searched for.
router.get("/api/characters", getSearchableCharacters);

export default router;
