const express = require("express");
const { User } = require("./modals/user");
const bcrypt = require("bcrypt");

const app = express();
const saltRounds = 10;

app.post("/api/add_user", async (request, response) => {
  const userModal = new User({ ...request.body });

  try {
    const user = await User.findOne({ email: userModal.email });

    if (user) {
      return response.json("Already have an account");
    } else {
      const hashpassword = await bcrypt.hash(userModal.password, saltRounds);
      const hashUser = new User({
        password: hashpassword,
        name: userModal.name,
        email: userModal.email,
      });
      const createdUser = await hashUser.save();

      return response.status(200).json(createdUser);
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/api/validate_user", async (request, response) => {
  const userModal = new User({ ...request.body });

  try {
    const user = await User.findOne({ email: userModal.email });

    if (user) {
      const isMatched = await bcrypt.compare(userModal.password, user.password);

      if (isMatched) {
        return response.status(200).json("User is logged in.");
      } else {
        return response.status(200).json("Password is incorrect");
      }
    } else {
      return response.json("There is no account associated with this email.");
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/users", async (request, response) => {
  const users = await User.find();

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/api/users/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const userById = await User.findById(id);
    response.status(200).json(userById);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
