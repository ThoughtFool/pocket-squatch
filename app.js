// if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
// }

const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
global.fetch = require("node-fetch");
const path = require("path");
const bodyParser = require("body-parser"); // (handler: post)
const { engine } = require("express-handlebars");
const startGame = require("./public/logic/game-logic/enter-game");
const space_key = require("./public/data/instance-data");
const gamespace = require("./public/data/game-space");
const gameroom = require("./_sandbox/game-room-data");
const Sprite = require("./public/logic/class/sprite-class");
const enterGame = require("./public/logic/game-logic/enter-game");
const player_data = require("./public/data/player-data");
const { roomID } = require("./public/data/game-data");
const idArray = [];

// const gameData = require("./public/data/enemy-data");
let currentTime;
let currentGameroom = gameroom;

const app = express();

// =============================================
// =============================================

const mongoose = require("mongoose");
require("mongoose").set("debug", true);
const MONGODB_URI =
    process.env.DATABASE_URL;

mongoose.connect(MONGODB_URI);
const mongoose_DB = mongoose.connection;

mongoose_DB.on("error", (err) => console.error(err));
mongoose_DB.once("open", () => console.log("Database: Connected!"));

// =============================================
// =============================================

app.use(logger("dev"));

// Set templating engine:
app.engine(
    "handlebars",
    engine({
        extname: ".handlebars",
        defaultLayout: "main",
        layoutsDir: __dirname + "/views/layouts/",
        partialsDir: __dirname + "/views/partials/",
    })
);
app.set("view engine", "handlebars");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
); // (handler: post)

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "dist"))); // using webpack:

const databaseUrl = "pocketDB";
const collections = ["mySquatches"];

// =============================================
// =============================================

const levelsRouter = require("./routes/levels");
app.use("/levels", levelsRouter);

// =============================================
// =============================================

// set up mongojs db:
const db = mongojs(databaseUrl, collections);

db.on("error", (error) => {
    console.log("Database Error:", error);
});
// ===================================================================
// ===========================  refactor  ============================
// ===================================================================

// app.get("/levels/block-builder/ids", function (req, res) {
//     // app.get("/test-box", function (req, res) {
//     // console.log("mongoose_DB.find()");
//     // console.log(mongoose_DB.find());

//     res.render("block-builder", {
//         // levels: mongoose_DB.find()
//         idArray: idArray,
//     });
// });

app.post("/block-builder", function (req, res) {
    // let playerCreatedLevels = req.body["time-stamp-id"];
    let gameLevel_ID = req.body["time-stamp-id"];
    console.log("req.body");
    console.log(req.body);

    mongoose_DB.save({
        // db.mySquatches.insert({
        name: req.body.coolName,
        createdBy: gameLevel_ID,
        blueprint: [gameLevel_ID],
    });

    // res.render("test-box", {

    //     gameLevel_ID
    // });
    // console.log(playerCreatedLevels);
});

// ===================================================================
// ===========================  refactor  ============================
// ===================================================================

// startGame(gameData, gameroom);
// console.log(currentGameroom);
// call takeAction and provide actionType
// TODO: create actionType for defend, transform, etc.
// TODO: create method for stone queen's different forms

app.post("/battle", function (req, res) {
    // (handler: post)

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
    }

    res.send(`Data received:\n ${gameroom.timer}`);
    // res.end();
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////

app.post("/submit", (req, res) => {
    console.log(req.body);

    db.mySquatches.insert(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.get("/all", async (req, res) => {
    await db.mySquatches.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

app.get("/find/:SpaceID", async (req, res, next) => {
    await db.mySquatches.findOne(
        {
            // _id: mongojs.ObjectId(req.params.id)
            SpaceID: req.params.SpaceID,
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    ).clone();
    next();
});

app.post("/update/:id", async (req, res) => {
    await db.mySquatches.update(
        {
            _id: mongojs.ObjectId(req.params.id),
        },
        {
            $set: {
                title: req.body.title,
                note: req.body.note,
                modified: Date.now(),
            },
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

app.delete("/delete/:id", async (req, res) => {
    await db.mySquatches.remove(
        {
            _id: mongojs.ObjectID(req.params.id),
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

app.delete("/clearall", async (req, res) => {
    await db.mySquatches.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send(response);
        }
    });
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////

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
});

app.get("/test-animations", function (req, res) {
    res.render("test-animations", {
        timer: parseInt(gameroom.timer), // create function to evalute timer on client with timer on server and update on change
    });
});

app.get("/login", function (req, res) {
    // res.send(gamespace);
    res.render("login", {});
});

app.post("/enter-level", function (req, res) {
    let spriteName = req.body["createSprite"];
    let { gamespace, SpaceID, SpaceIndex } = enterGame(spriteName, player_data);

    mongoose_DB.mySquatches.insert(
        {
            // db.mySquatches.insert({
            roomID: roomID,
            gamespace: gamespace,
            SpaceID: SpaceID,
            SpaceIndex: SpaceIndex,
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                console.log("data:");
                console.log(data);
                res.render("test-box", {
                    // res.render("test-animations", {
                    spriteName: spriteName,
                    roomID: roomID,
                    gamespace: gamespace,
                    SpaceID: SpaceID,
                    SpaceIndex: SpaceIndex,
                });
            }
        }
    );

    // res.redirect("/");
});

app.get("/", function (req, res) {
    // app.get("/test-box", function (req, res) {
    res.render("test-box", {
        timer: parseInt(gameroom.timer), // create function to evalute timer on client with timer on server and update on change
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
