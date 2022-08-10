// Character related routes will be hosted here.
const router = require("express").Router();

// Require character handlers.
const { getCharacter } = require("../handlers/characters");

// #Endpoints.

// Get the character data.
router.get("/api/characters", getCharacter);

module.exports = router;
