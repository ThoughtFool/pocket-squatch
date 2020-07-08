const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // (handler: post)
const mongodb = require("mongodb"); // (database)
const exphbs = require("express-handlebars");
const startGame = require("./public/logic/game-logic/enter-game");
const gameroom = require("./public/data/game-room-data");

// const gameData = require("./public/data/enemy-data");
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

// using webpack:
app.use(express.static(path.resolve(__dirname, "dist")));

app.get('/', (req, res) => {

    res.render(path.join(__dirname + '/index.html'));

});

// startGame(gameData, gameroom);
// console.log(currentGameroom);

// call takeAction and provide actionType
// TODO: create actionType for defend, transform, etc.
// TODO: create method for stone queen's different forms

app.post("/", function (req, res) { // (handler: post)

    let actionType = req.body["actionType"];

    if (actionType === "isWinner" || actionType === "isDefeated") {
        gameroom.player[actionType](gameroom);
    } else {
        // let updateGameroom = gameroom.player.takeAction(actionType);
        let updateGameroom = gameroom.player[actionType]();

        console.log("====================");
        console.log("updateGameroom:");
        console.log("====================");
        console.log(updateGameroom);
        console.log("====================");
        console.log(gameroom.timer);
    };

    // dbConnection.then(function (db) {
    //     delete req.body._id;
    //     db.collection("gameData").insertOne(req.body);
    //         res.redirect("/");
    // });

    res.send(`Data received:\n ${gameroom.timer}`);
    // res.end();
});

app.get("/gamescreen", function (req, res) {
    res.render("counter", {
        spriteName: gameroom.player.name,
        timer: parseInt(gameroom.timer),
    });
});

app.post("/gamescreen", function (req, res) {
    res.render("counter", {
        spriteName: gameroom.player.name,
        timer: parseInt(gameroom.timer),
    });
});

app.get("/test-actions", function (req, res) {
    res.render("test-actions", {
        roomID: gameroom.roomID,
        spriteName: gameroom.player.name,
        beingType: gameroom.player.beingType,
        humanHealth: gameroom.player.stats.friend.human.health, // stats: { friend: [Object],
        sasquatchHealth: gameroom.player.stats.friend.sasquatch.health,
        enemyHealth: gameroom.player.stats.foe.enemySprite.health,
        wins: parseInt(gameroom.wins),
        losses: parseInt(gameroom.losses),
        timer: parseInt(gameroom.timer), // create function to evalute timer on client with timer on server and update on change
    });
});


app.post("/test-actions", function (req, res) {
    let actionType = req.body["actionType"];

    if (actionType != undefined) {
        // if (actionType === "isWinner" || actionType === "isDefeated") {
            gameroom.player[actionType](gameroom);
        // } else {
            // let updateGameroom = gameroom.player[actionType]();
            // res.redirect("/test-actions");
            // };

    } else {
        console.log("Please select a method before submitting form.");
    }
    res.redirect("/test-actions");


        // console.log("====================");
        // console.log("updateGameroom:");
        // console.log("====================");
        // console.log(updateGameroom);
        // console.log("====================");
        // console.log(gameroom.timer);
    // // MongoDB data:
    // dbConnection.then(function (db) {
    //     delete req.body._id;
    //     db.collection("gameData").insertOne(req.body);
    //         res.redirect("/");
    // });

});

app.get("/test-animations", function (req, res) {
    res.render("test-animations", {
        
        timer: parseInt(gameroom.timer) // create function to evalute timer on client with timer on server and update on change
    });
});

// app.post("/test-animations", function (req, res) {
//     let actionType = req.body["actionType"];

//     if (actionType != undefined) {
//         gameroom.player[actionType](gameroom);

//     } else {
//         console.log("Please select a method before submitting form.");
//     }
//     res.redirect("/test-animations");
// });


const PORT = process.env.PORT || 3000 || process.env.IP || "0.0.0.0";
app.listen(PORT);

console.log(`Listening on PORT: ${PORT}`);