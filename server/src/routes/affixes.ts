// Required packages.
const router = require("express").Router();

// Required handlers.
const { getAffixes } = require("../handlers/affixes");

// Get the current affixes in rotation.
router.get("/api/affixes", getAffixes);

export default router;
