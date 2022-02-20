require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
require('mongoose').set('debug', true)

mongoose.connect(process.env.DATABASE_URL);
const dbTest = mongoose.connection;

dbTest.on("error", (err) => console.error(err));
dbTest.once("open", () => console.log("Database: Connected!"));

app.use(express.json());

const levelsRouter = require("./routes/levels");
app.use("/levels", levelsRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});