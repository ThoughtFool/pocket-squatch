const player_data = require("../public/data/player-data");
const enterGame = require("../public/logic/game-logic/enter-game");
const enterLevel = require("../public/logic/game-logic/enter-level");
const timeKeeper = require("../public/logic/game-logic/time-keeper");

//////////////////////////////////////////////////////////////////

// test ONLY:
const enterGameBtn = document.getElementById("enter-game-btn");
const enterLevelBtn = document.getElementById("enter-level-btn");
const enemyBtn = document.getElementById("enemy-btn");
let roomInstance;
let transformTimer;

enterGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Entering game...");

    // testing ONLY (user input needed):
    let spriteName = "Lyric Elderkin";
    roomInstance = enterGame(spriteName, player_data);
    
    return roomInstance;
});

enterLevelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Entering level...");

    console.log("roomInstance:");
    console.log(roomInstance);

    return enterLevel(timeKeeper);
});

//////////////////////////////////////////////////////////////////
// test data: need to move backend logic to front for testing: (object-based game physics)
//////////////////////////////////////////////////////////////////

// called when game is iniated;
const Game_Screen = require("../public/logic/game-logic/_TBD/gamescreen-class");
const myGamescreen = new Game_Screen("game-screen", "fullscreen");
console.log("myGamescreen");
console.log(myGamescreen);

// places sprite and is called after game is iniated:
const createSpriteElem = function (gameSpace_Data, gameScreen_ID, ground_ID, ) {
    
};

// //////////////////////////////////////////////////////////////////
// // create Sprite:
// const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes); // name, health, hasStoneQueen, timeOfDay, asleep, timer

// // add Sprite to player:
// player_data.sprite = sprite_data;

// // set game level:
// game_data.loadLevel(player_data.currentLevel);

// // create gameroom instance:
// const myGameInstance = new Gameroom_Instance(player_data, game_data);

// // game space:
// const gamespace = require("../public/data/game-space");

// // set gameroom instance and timestamp id:
// gamespace.setData(myGameInstance);

// console.log("gamespace.data[0].gameInstance.player.sprite");
// console.log(gamespace.data[0].gameInstance.player.sprite);
// //////////////////////////////////////////////////////////////////

// const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, enemy_data);

// gameroom.player = sprite_data;
// gameroom.enemy = enemy_data;
// gameroom.data.timer = 0;

// const Sprite_Physics = require("../public/logic/class/sprite-physics-class");
// const testSprite = new Sprite_Physics("game-screen", "ground", "foe", "enemy-02", 2, 1, .8, 300, 300);
// // const testSprite = new Sprite_Physics("game-screen", "ground-01", "foe", "enemy-02", 2, 1, .8, 300, 300);
// console.log("testSprite:");
// console.log(testSprite);

//////////////////////////////////////////////////////////////////
// instance builder class:
//////////////////////////////////////////////////////////////////

// level_data.enemy = enemy_data;  OR
// enemy_data = level_data.enemy;
// const populate_level_enemy_data = require("../public/data/populate-level-enemy-data");

// const myInstance = new Build_Instance(actionTypes, player_data, sprite_data, level_data, enemy_data, game_data, populate_level_enemy_data, gameroom_data, myGamescreen, testSprite);


//////////////////////////////////////////////////////////////////
// testing enemy animation (gravity and velocity):
//////////////////////////////////////////////////////////////////

// function animateSprite() {
//     requestAnimationFrame(animateSprite);
//     testSprite.updatePos();
// };
// animateSprite();

//////////////////////////////////////////////////////////////////
// initiates client-side timer for transformations:
//////////////////////////////////////////////////////////////////

// const timeKeeper = require("../public/logic/game-logic/time-keeper");
// setInterval(timeKeeper, 1000);

//////////////////////////////////////////////////////////////////
// event listener for moving player sprite(s):
//////////////////////////////////////////////////////////////////

const btnDownUp = require("../public/logic/sprite-logic/client/btn-down-up");
document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);