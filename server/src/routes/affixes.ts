// Affix related routes will be hosted here.
const router = require("express").Router();

// Require affix handlers.
const { getAffixes } = require("../handlers/affixes");

// #Endpoints.

// Get the current affixes in rotation.
router.get("/api/affixes", getAffixes);

export default router;
