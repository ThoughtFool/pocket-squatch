//////////////////////////////////////////////////////////////////
// test data: need to move backend logic to front for testing: (object-based game physics)
//////////////////////////////////////////////////////////////////

// called when game is iniated;
const Game_Screen = require("../public/logic/game-logic/gamescreen-class");
const myGamescreen = new Game_Screen("game-screen", "fullscreen");
console.log(myGamescreen);

// places sprite and is called after game is iniated:
const Sprite_testPhysics = require("../public/logic/sprite-logic/sprite-class");
const testSprite = new Sprite_testPhysics("game-screen", "ground-01", "enemy", "enemy-02", 300, 300, 2);
console.log(testSprite);

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