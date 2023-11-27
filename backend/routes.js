const express = require("express");
const { User } = require("./models/user");

const app = express();

app.post("/add_user", async (request, response) => {
  const { email } = request.body;
  const userModal = new User({ ...request.body });

  const user = await User.findOne({ email: email });

  if (user) {
    return response.json("Already have an account");
  } else {
    const createdUser = await userModal.save();
    return response.status(200).json(createdUser);
  }
});

app.get("/users", async (request, response) => {
  const users = await User.find();

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/:id", async (request, response) => {
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
