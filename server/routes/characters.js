// Character related routes will be hosted here.
const router = require("express").Router();

// Require character handlers.
const { getCharacter, getSuggestions } = require("../handlers/characters");

// #Endpoints.

// Get the character data.
router.get("/api/characters", getCharacter);

// Get an array of character suggestions.
router.get("/api/characters/suggestions", getSuggestions);

module.exports = router;
