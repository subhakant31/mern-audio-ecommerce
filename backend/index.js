const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use(Router);

const username = process.env.db_username;
const password = process.env.db_password;
const cluster = process.env.db_cluster;
const dbname = process.env.db_database;

const start = async () => {
  try {
    let url = `mongodb+srv://${username}:${password}@musicshop.0ulau8g.mongodb.net/${dbname}?retryWrites=true&w=majority`;

    await mongoose.connect(url);

    app.listen(3000, () =>
      console.log("Server started on port 3000", username)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
