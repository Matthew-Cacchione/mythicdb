// Authentication related handlers will be hosted here.
const { MongoClient, ObjectId } = require("mongodb");

// Require environment variables.
require("dotenv").config();
const { ACCESS_TOKEN_SECRET, MONGO_URI } = process.env;

// Require bcrypt for password encryption.
const bcrypt = require("bcrypt");

// Require json web tokens for authentication.
const jwt = require("jsonwebtoken");

// Set Mongo options.
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Change the user's password.
const changePassword = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the necessary details from the request.
  const { _id } = req.user;
  const { oldPassword, newPassword } = req.body;

  // If any details are missing respond with a bad request.
  if (!oldPassword || !newPassword) {
    return res
      .status(400)
      .json({ status: 400, message: "Request is missing data." });
  }

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    // Verify that the user exists in the database.
    const user = await users.findOne({ _id: ObjectId(_id) });

    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "No user found.", data: { _id } });
    }

    // Verify that the password entered is correct.
    const verify = await bcrypt.compare(oldPassword, user.password);

    if (!verify) {
      return res.status(401).json({
        status: 401,
        message: "Incorrect password provided.",
      });
    }

    // Request has passed all tests, update the user's password.
    const hash = await bcrypt.hash(newPassword, 10);

    // Setup arguments for update.
    const query = { _id: ObjectId(_id) };
    const patch = { $set: { password: hash } };

    // Verify that the update was successful and respond appropriately.
    const response = await users.updateOne(query, patch);

    if (response.modifiedCount) {
      // Remove the user's password from the response.
      const clone = { ...user };
      delete clone.password;

      return res.status(200).json({ status: 200, data: { user: clone } });
    } else {
      return res
        .status(502)
        .json({ status: 502, message: "Update failed, please try again." });
    }
  } catch (e) {
    console.error("Error changing password:", e);

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
        return res.status(500).json({
          status: 500,
          message: "Something went wrong, please try again.",
          data: { _id },
        });
    }
  } finally {
    client.close();
  }
};

// Delete the user with given access token.
const deleteUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the user id from the request.
  const { _id } = req.user;

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    // Find the specific user in the collection.
    const response = await users.deleteOne({ _id: ObjectId(_id) });

    // Verify that the user was deleted and respond appropriately.
    if (response.deletedCount) {
      return res.status(204).json();
    } else if (response.acknowledged) {
      return res
        .status(404)
        .json({ status: 404, message: "No user found.", data: { _id } });
    } else {
      return res.status(502).json({
        status: 502,
        message: "Deletion failed, please try again.",
      });
    }
  } catch (e) {
    console.error("Error deleting user:", e);

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
        return res.status(500).json({
          status: 500,
          message: "Something went wrong, please try again.",
          data: { _id },
        });
    }
  } finally {
    client.close();
  }
};

// Get the user details given an access token.
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the search id from the request.
  const { _id } = req.user;

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
        message: "No user found.",
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
        return res.status(500).json({
          status: 500,
          message: "Something went wrong, please try again.",
          data: { _id },
        });
    }
  } finally {
    client.close();
  }
};

// Set the user's main character in the database.
const setMainCharacter = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the necessary details from the request.
  const { _id } = req.user;
  const { name, realm } = req.body;

  // If any details are missing respond with a bad request.
  if (!name || !realm) {
    return res
      .status(400)
      .json({ status: 400, message: "Request is missing data." });
  }

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    // Setup variables for update.
    const query = { _id: ObjectId(_id) };
    const patch = { $set: { main: { name, realm } } };

    const response = await users.updateOne(query, patch);

    // Verify that the update was successful and respond appropriately.
    if (!response.matchedCount) {
      return res
        .status(404)
        .json({ status: 404, message: "No user found.", data: { _id } });
    } else if (!response.modifiedCount) {
      return res.status(502).json({
        status: 502,
        message: "User was not updated, please try again.",
      });
    }

    return res.status(200).json({ status: 200, data: { name, realm } });
  } catch (e) {
    console.error("Error occurred setting main character:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
    });
  } finally {
    client.close();
  }
};

// Sign a user in given username and password.
const signIn = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the sign in details from the request.
  const { username, password } = req.body;

  // If either value is missing, respond with a bad request.
  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      message: "Request is missing data.",
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

      // Create a JSON token for authentication.
      const token = jwt.sign(clone, ACCESS_TOKEN_SECRET);

      return res.status(200).json({ status: 200, data: { token } });
    }
  } catch (e) {
    console.error("Error signing in:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
    });
  } finally {
    client.close();
  }
};

// Create a new user given username and password.
const signUp = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  // Extract the sign up details from the request.
  const { username, password } = req.body;

  // If either value is missing, respond with a bad request.
  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      message: "Request is missing data.",
    });
  }

  try {
    await client.connect();
    const users = client.db("master").collection("users");

    let user = await users.findOne({ username });

    // If the username is taken respond with a bad request.
    if (user) {
      return res.status(400).json({ status: 400, message: "Username taken." });
    }

    // Create a new user with the given details.
    const hash = await bcrypt.hash(password, 10);
    user = { username, password: hash, main: { name: "", realm: "" } };

    const response = await users.insertOne(user);

    // Verify that the user was inserted successfully.
    if (response.insertedId) {
      // Remove the user's password from the response.
      const clone = { _id: response.insertedId.toString(), ...user };
      delete clone.password;

      return res.status(201).json({ status: 201, data: { user: clone } });
    } else {
      return res.status(502).json({
        status: 502,
        message: "Sign up failed, please try again.",
      });
    }
  } catch (e) {
    console.error("Error signing up:", e);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again.",
    });
  } finally {
    client.close();
  }
};

module.exports = {
  changePassword,
  deleteUser,
  getUser,
  setMainCharacter,
  signIn,
  signUp,
};
