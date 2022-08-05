// Authentication related routes will be hosted here.
const router = require("express").Router();

// Require authentication handlers.
const { getUser } = require("../handlers/authentication");

// #Endpoints.
router.get("/api/users/:_id", getUser);

module.exports = router;
