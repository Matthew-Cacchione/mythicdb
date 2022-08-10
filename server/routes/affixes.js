// Affix related routes will be hosted here.
const router = require("express").Router();

// Require affix handlers.
const { getAffix, getAffixRotation } = require("../handlers/affixes");

// #Endpoints.

// Get the affixes in rotation.
router.get("/api/affixes", getAffixRotation);

// Get the data about a specified affix.
router.get("/api/affixes/:id", getAffix);

module.exports = router;
