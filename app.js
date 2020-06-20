const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // (handler: post)
const mongodb = require("mongodb"); // (database)
const exphbs = require("express-handlebars");
const startGame = require("./actions/start-game");
const gameData = require("./actions/game-data");
const gameroom = require("./actions/game-room");
let currentTime;
let currentGameroom = gameroom;

// const dbConnection = mongodb.MongoClient.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }); // (database)

const app = express();

// Set templating engine:
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
})); // (handler: post)
app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {

    res.render(path.join(__dirname + '/index.html'));

});

startGame(gameData, gameroom);
// console.log(currentGameroom);

// call takeAction and provide actionType
// TODO: create actionType for defend, transform, etc.
// TODO: create method for stone queen's different forms

app.post("/", function (req, res) { // (handler: post)

    let actionType = req.body["actionType"];

    if (actionType === "isWinner" || actionType === "isDefeated") {
        gameroom.player[actionType](gameroom);
    } else {
        let updatedStates = gameroom.player.takeAction(actionType);
        
        console.log("====================");
        console.log("updatedStates:");
        console.log("====================");
        console.log(updatedStates);
        console.log("====================");
    };

    // if (actionType === "strike" || actionType === "defend") {

    // } else {

    // };


    // dbConnection.then(function (db) {
    //     delete req.body._id;
    //     db.collection("gameData").insertOne(req.body);
    // });
    // res.send(`Data received:\n ${JSON.stringify(gameData)}`);
    // res.end();
});

app.get("/gamescreen", function (req, res) {
    res.render("index", JSON.stringify(gameData));
});

app.post("/gamescreen", function (req, res) {});

const PORT = process.env.PORT || 3000 || process.env.IP || "0.0.0.0";
app.listen(PORT);

console.log(`Listening on PORT: ${PORT}`);