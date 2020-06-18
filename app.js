const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // (handler: post)
const mongodb = require("mongodb"); // (database)
const startGame = require("./actions/time-keeper");
const gameData = require("./actions/game-data");

// const dbConnection = mongodb.MongoClient.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }); // (database)

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
})); // (handler: post)
app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));;
});

app.post("/", function (req, res) { // (handler: post)

    let strikeOrDefend = actionType = req.body["strikeOrDefend"];
    // call takeAction and provide actionType
    // TODO: create actionType for defend, transform, etc.
    // TODO: create method for stone queen's different forms
    gameData.player.takeAction(strikeOrDefend, gameData);

    console.log("====================");
    console.log("actionType:");
    console.log("====================");
    console.log(actionType);
    console.log("====================");

    // dbConnection.then(function (db) {
    //     delete req.body._id;
    //     db.collection("gameData").insertOne(req.body);
    // });
    // res.send(`Data received:\n ${JSON.stringify(gameData)}`);
    res.end();
});

startGame(gameData);

const PORT = process.env.PORT || 3000 || process.env.IP || "0.0.0.0";
app.listen(PORT);

console.log(`Listening on PORT: ${PORT}`);