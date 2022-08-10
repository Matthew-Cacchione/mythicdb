// Realm related routes will be hosted here.
const router = require("express").Router();

// Require realm handlers.
const { getSlug } = require("../handlers/realms");

// #Endpoints.

// Get the realm slug given its name.
router.get("/api/realms/slug", getSlug);

module.exports = router;
