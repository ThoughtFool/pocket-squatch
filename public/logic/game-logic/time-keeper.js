const sprite_Data = require("../../data/sprite-data");
const enemy_sprite_Data = require("../sprite-logic/enemy-sprite-data");
const moveAndDisplay = require("../sprite-logic/move-and-display");
const gravityFunc = require("./gravity-func");
const groundObj = require("./ground-obj");

let clientStart = Date.now();
let myTimer = 0;

const timeKeeper = function () {

    ////////////////////////////////////////////////////////////////////////////////////
    // test ONLY (automatically move enemy sprites):
    const enemyBlock = document.getElementById("enemy-01");
    enemy_sprite_Data.counter = myTimer;
    enemy_sprite_Data.checkPosition();

    // TODO: create a generic function to pass in enemy id, similar to collision checker:
    enemy_sprite_Data.getPosition(enemyBlock);
    // enemyBlock.style.left = `translateY(${enemy_sprite_Data.position + enemy_sprite_Data.steps}px`
    enemyBlock.style.left = enemy_sprite_Data.position + enemy_sprite_Data.steps + "px";

    ////////////////////////////////////////////////////////////////////////////////////
    let spriteHolder = document.querySelector(".transform-holder");
    let timerSpan = document.querySelector("#timer-span");

    ////////////////////////////////////////////////////////////////////////////////////
    gravityFunc(spriteHolder, groundObj);

    ////////////////////////////////////////////////////////////////////////////////////

    timerSpan.innerHTML = myTimer;

    if (myTimer < 25) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = false;
                sprite_Data.beingType = "human";
                moveAndDisplay.transform(spriteHolder, sprite_Data.beingType);
            });
        };

    } else if (myTimer >= 25 && myTimer < 60) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer === 25) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = true;
                sprite_Data.beingType = "sasquatch";
                console.log(spriteHolder);
            });
        };

    } else if (myTimer >= 60) {
        clientStart = Date.now();
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`restart myTimer!`);
        console.log(`=======================`);
    };

    // find difference in seconds:
    myTimer = Math.floor((Date.now() - clientStart) / 1000);
    return myTimer;
};

module.exports = timeKeeper;