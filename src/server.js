const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", process.env.DB_PORT);

app.use(express.json());
app.use(cors());

app.use(require("./api/users/users.route"));

module.exports = app;
