const startGame = require("../public/logic/game-logic/start-game");
const player_data = require("../public/data/player-data");
const game_data = require("../public/data/game-data");
const level_data = require("../public/data/level-data");
const actionTypes = require("../public/logic/sprite-logic/method/action-types");

// enemy data holder:
const enemy_data = require("../public/data/enemy-data");

// gamespace or room:
const gameroom = require("../public/data/game-room-data");

// creates player "in-game" sprite:
const Sprite = require("../public/logic/class/sprite-logic");

// creates "holder" for all user/player data needed to play game (achievements, etc.):
const Build_Instance = require("../public/logic/class/build-instance");

let currentTime;
let gameroom_data = gameroom;

const startBtn = document.getElementById("start-btn");
const enemyBtn = document.getElementById("enemy-btn");
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Game has begun!");

    startGame(enemy_data, gameroom);
    startLevel(enemy_data, gameroom);
});


//////////////////////////////////////////////////////////////////
// test data: need to move backend logic to front for testing: (object-based game physics)
//////////////////////////////////////////////////////////////////

// called when game is iniated;
const Game_Screen = require("../public/logic/game-logic/gamescreen-class");
const myGamescreen = new Game_Screen("game-screen", "fullscreen");
console.log("myGamescreen");
console.log(myGamescreen);

// places sprite and is called after game is iniated:
const createSpriteElem = function (gameSpace_Data, gameScreen_ID, ground_ID, ) {

};

const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak"); // name, health, hasStoneQueen, timeOfDay, asleep, timer
// const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, enemy_data);
// gameroom.player = sprite_data;
// gameroom.enemy = enemy_data;
// gameroom.data.timer = 0;

const Sprite_Physics = require("../public/logic/class/sprite-physics-class");
const testSprite = new Sprite_Physics("game-screen", "ground-01", "foe", "enemy-02", 2, 1, .8, 300, 300);
console.log(testSprite);

//////////////////////////////////////////////////////////////////
// instance builder class:
//////////////////////////////////////////////////////////////////

// level_data.enemy = enemy_data;  OR
// enemy_data = level_data.enemy;
const populate_level_enemy_data = require("../public/data/populate-level-enemy-data");

myInstance = new Build_Instance(actionTypes, player_data, sprite_data, level_data, enemy_data, game_data, populate_level_enemy_data, gameroom_data, myGamescreen, testSprite);

console.log("myInstance:");
console.log(myInstance);
console.log("myInstance.set_gameroom()");
console.log(myInstance.set_gameroom());

// populate_level_enemy_data.loop(01, 5);
// console.log(populate_level_enemy_data.spawn);

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

const btnDownUp = require("../public/logic/sprite-logic/client/btn-down-up");
document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);