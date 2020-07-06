const startGame = require("../public/logic/game-logic/start-game");
const actionTypes = require("../public/data/action-types");


// enemy data holder:
const gameData = require("../public/data/game-data");

// gamespace or room:
const gameroom = require("../public/data/game-room");

// creates player "in-game" sprite:
const Sprite = require("../public/logic/sprite-logic/sprite-logic");

// creates "holder" for all user/player data needed to play game (achievements, etc.):
const Build_Instance = require("../public/logic/build-instance");

let currentTime;
let currentGameroom = gameroom;

const startBtn = document.getElementById("start-btn");
const enemyBtn = document.getElementById("enemy-btn");
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Game has begun!");

    startGame(gameData, gameroom);
});


//////////////////////////////////////////////////////////////////
// test data: need to move backend logic to front for testing: (object-based game physics)
//////////////////////////////////////////////////////////////////

// called when game is iniated;
const Game_Screen = require("../public/logic/game-logic/gamescreen-class");
const myGamescreen = new Game_Screen("game-screen", "fullscreen");
console.log(myGamescreen);

// places sprite and is called after game is iniated:
const createSpriteElem = function (gameSpace_Data, gameScreen_ID, ground_ID, ) {

};

const Sprite_testPhysics = require("../public/logic/sprite-logic/sprite-class");
const testSprite = new Sprite_testPhysics("game-screen", "ground-01", "enemy", "enemy-02", 300, 300, 2);
console.log(testSprite);

//////////////////////////////////////////////////////////////////
// instance builder class:
//////////////////////////////////////////////////////////////////

const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, gameData); // name, health, hasStoneQueen, timeOfDay, asleep, timer
gameroom.player = sprite_data;
gameroom.timer = 0;

// (sprite_data, game_data, action_types, level_data, game_timer):
myInstance = new Build_Instance(sprite_data, gameData, actionTypes, myGamescreen, testSprite);

console.log("myInstance:");
console.log(myInstance);

//////////////////////////////////////////////////////////////////
// testing enemy animation (gravity and velocity):
//////////////////////////////////////////////////////////////////

function animateSprite() {
    requestAnimationFrame(animateSprite);
    testSprite.updatePos();
};
animateSprite();

//////////////////////////////////////////////////////////////////
// initiates client-side timer for transformations:
//////////////////////////////////////////////////////////////////

const timeKeeper = require("../public/logic/game-logic/time-keeper");
setInterval(timeKeeper, 1000);

//////////////////////////////////////////////////////////////////
// event listener for moving player sprite(s):
//////////////////////////////////////////////////////////////////

const btnDownUp = require("../public/logic/game-logic/btn-down-up");
document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);