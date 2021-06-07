const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
global.fetch = require("node-fetch");
const path = require("path");
const bodyParser = require("body-parser"); // (handler: post)
const exphbs = require("express-handlebars");
const startGame = require("./public/logic/game-logic/enter-game");
const space_key = require("./public/data/instance-data");
const gamespace = require("./public/data/game-space");
const gameroom = require("./_sandbox/game-room-data");
const Sprite = require("./public/logic/class/sprite-class");
const enterGame = require("./public/logic/game-logic/enter-game");
const player_data = require("./public/data/player-data");
const {
    roomID
} = require("./public/data/game-data");

// const gameData = require("./public/data/enemy-data");
let currentTime;
let currentGameroom = gameroom;

const app = express();

app.use(logger("dev"));

// Set templating engine:
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: true
})); // (handler: post)

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "dist"))); // using webpack:

const databaseUrl = "pocketDB";
const collections = ["mySquatches"];

// set up mongojs db:
const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

// app.get('/', (req, res) => {
//     // res.render(path.join(__dirname + '/index.html'));
// });
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

app.get("/all", (req, res) => {
    db.mySquatches.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });
});

app.get("/find/:SpaceID", (req, res) => {
    db.mySquatches.findOne({
        // _id: mongojs.ObjectId(req.params.id)
        SpaceID: req.params.SpaceID
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

app.post("/update/:id", (req, res) => {
    db.mySquatches.update({
        _id: mongojs.ObjectId(req.params.id)
    }, {
        $set: {
            title: req.body.title,
            note: req.body.note,
            modified: Date.now()
        }
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

app.delete("/delete/:id", (req, res) => {
    db.mySquatches.remove({
        _id: mongojs.ObjectID(req.params.id)
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

app.delete("/clearall", (req, res) => {
    db.mySquatches.remove({}, (error, response) => {
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

        timer: parseInt(gameroom.timer) // create function to evalute timer on client with timer on server and update on change
    });
});

app.get("/login", function (req, res) {
    // res.send(gamespace);
    res.render("login", {});
});

app.post("/enter-level", function (req, res) {
    let spriteName = req.body["createSprite"];
    let {
        gamespace,
        SpaceID,
        SpaceIndex
    } = enterGame(spriteName, player_data);

    db.mySquatches.insert({
        roomID: roomID,
        gamespace: gamespace,
        SpaceID: SpaceID,
        SpaceIndex: SpaceIndex
    }, (error, data) => {
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
                SpaceIndex: SpaceIndex
            });
        };
    });

    // res.redirect("/");
});

app.get("/", function (req, res) {
    // app.get("/test-box", function (req, res) {
    res.render("test-box", {

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