// Authentication related handlers will be hosted here.
const { MongoClient, ObjectId } = require("mongodb");

// Require environment variables.
require("dotenv").config();
const { MONGO_URI } = process.env;

// Require bcrypt for password encryption.
const bcrypt = require("bcrypt");

// Set Mongo options.
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Get the user details given an id.
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the search id from the request.
  const { _id } = req.params;

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    // Find the specific user in the collection.
    const user = await users.findOne({ _id: ObjectId(_id) });

    // Verify if the user was found and respond appropriately.
    if (user) {
      // Remove the user's password from the response.
      const clone = { ...user };
      delete clone.password;

      return res.status(200).json({ status: 200, data: { user: clone } });
    } else {
      return res.status(404).json({
        status: 404,
        message: "No user found with that id.",
        data: { _id },
      });
    }
  } catch (e) {
    console.error("Error fetching user:", e);

    // Respond based on the error thrown.
    switch (e.name) {
      // Id provided is not a valid ObjectId.
      case "BSONTypeError":
        return res.status(400).json({
          status: 400,
          message: "Invalid id provided.",
          data: { _id },
        });

      default:
        return res
          .status(500)
          .json({ status: 500, message: e.name, data: { _id } });
    }
  } finally {
    client.close();
  }
};

const signIn = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the sign in details from the request.
  const { username, password } = req.body;

  // If either value is missing, respond with a bad request.
  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      message: "Request is missing data.",
      data: req.body,
    });
  }

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    const user = await users.findOne({ username });

    // Verify that the user attempting to sign in exists.
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "No user found with that username.",
        data: { username },
      });
    }

    // Verify that the password entered is correct.
    const verify = await bcrypt.compare(password, user.password);

    if (!verify) {
      return res.status(401).json({
        status: 401,
        message: "Incorrect password provided.",
        data: { username },
      });
    } else {
      // Remove the user's password from the response.
      const clone = { ...user };
      delete clone.password;

      return res.status(200).json({ status: 200, data: { user: clone } });
    }
  } catch (e) {
    console.error("Error signing in:", e);
    return res.status(500).json({ status: 500, message: e.name });
  } finally {
    client.close();
  }
};

module.exports = { getUser, signIn };
