// gamespace:
const gamespace = require("../../data/game-space");
const enemy_sprite_Data = require("../sprite-logic/method/enemy-sprite-data");
const moveAndDisplay = require("../sprite-logic/client/move-and-display");
const gravityFunc = require("./gravity-func");
const groundObj = require("./ground-obj");

let clientStart = Date.now();

const timeKeeper = function () {

    ////////////////////////////////////////////////////////////////////////////////////
    // test ONLY (automatically move enemy sprites):
    const enemyBlock = document.getElementById("enemy-01");
    // enemy_sprite_Data.counter = gamespace.data[0].gameInstance.data.timer;
    // enemy_sprite_Data.checkPosition();

    // TODO: create a generic function to pass in enemy id, similar to collision checker:
    // enemy_sprite_Data.getPosition(enemyBlock);
    // enemyBlock.style.left = `translateY(${enemy_sprite_Data.position + enemy_sprite_Data.steps}px`
    enemyBlock.style.left = enemy_sprite_Data.position + enemy_sprite_Data.steps + "px";

    ////////////////////////////////////////////////////////////////////////////////////
    let spriteHolder = document.querySelector(".transform-holder");
    let timerSpan = document.querySelector("#timer-span");

    ////////////////////////////////////////////////////////////////////////////////////
    gravityFunc(spriteHolder, groundObj);

    ////////////////////////////////////////////////////////////////////////////////////

    timerSpan.innerHTML = gamespace.data[0].gameInstance.data.timer;

    if (gamespace.data[0].gameInstance.data.timer < 25) {
        console.log(`=======================`);
        console.log(`gamespace.data[0].gameInstance.data.timer: ${gamespace.data[0].gameInstance.data.timer}`);

        console.log(`=======================`);
        if (gamespace.data[0].gameInstance.data.timer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = false;
                gamespace.data[0].gameInstance.player.sprite.beingType = "human";
                moveAndDisplay.transform(spriteHolder, gamespace.data[0].gameInstance.player.sprite.beingType);
            });
        };

    } else if (gamespace.data[0].gameInstance.data.timer >= 25 && gamespace.data[0].gameInstance.data.timer < 60) {
        console.log(`=======================`);
        console.log(`gamespace.data[0].gameInstance.data.timer: ${gamespace.data[0].gameInstance.data.timer}`);

        console.log(`=======================`);
        if (gamespace.data[0].gameInstance.data.timer === 25) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = true;
                gamespace.data[0].gameInstance.player.sprite.beingType = "sasquatch";
                console.log(spriteHolder);
            });
        };

    } else if (gamespace.data[0].gameInstance.data.timer >= 60) {
        clientStart = Date.now();
        console.log(`=======================`);
        console.log(`gamespace.data[0].gameInstance.data.timer: ${gamespace.data[0].gameInstance.data.timer}`);

        console.log(`restart gamespace.data[0].gameInstance.data.timer!`);
        console.log(`=======================`);
    };

    // find difference in seconds:
    gamespace.data[0].gameInstance.data.timer = Math.floor((Date.now() - clientStart) / 1000);
    return gamespace.data[0].gameInstance.data.timer;
};

module.exports = timeKeeper;