// Testing ONLY: gamespace index based on spaceID:
const space_key = require("../../data/instance-data");
const gamespace = require("../../data/game-space");
// const enemy_sprite_Data = require("../sprite-logic/method/enemy-sprite-data");
const moveAndDisplay = require("../sprite-logic/move-and-display/move-and-display");
// const gravityFunc = require("./_TBD/gravity-func");
const groundObj = require("./_TBD/ground-obj");
const keyPress_handler = require("../sprite-logic/client/keypress-handler");

let clientStart;

const timeKeeper = function () {

    // let world = gamespace.data[space_key.index].gameInstance.data.data;
    // console.log("world");
    // console.log(world);
    // gamespace.data[space_key.index].gameInstance.player.sprite.physics.updatePos(world);
    // // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();
    // // moveAndDisplay.moveMethod(keyPressed, spriteHolderElem);

    if (keyPress_handler.any) {
        keyPress_handler.any = false;
    };

    if (clientStart != null) {
        console.log("clientStart:");
        console.log(clientStart);
    } else {
        clientStart = Date.now();
    };

    ////////////////////////////////////////////////////////////////////////////////////
    // test ONLY (automatically move enemy sprites):
    // const enemyBlock = document.getElementById("enemy-01");
    // enemy_sprite_Data.counter = gamespace.data[space_key.index].gameInstance.data.timer;
    // enemy_sprite_Data.checkPosition();
    // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();

    // TODO: create a generic function to pass in enemy id, similar to collision checker:
    // enemy_sprite_Data.getPosition(enemyBlock);
    // enemyBlock.style.left = `translateY(${enemy_sprite_Data.position + enemy_sprite_Data.steps}px`
    // enemyBlock.style.left = enemy_sprite_Data.position + enemy_sprite_Data.steps + "px";

    ////////////////////////////////////////////////////////////////////////////////////
    let spriteHolder = document.querySelector(".transform-holder");
    let timerSpan = document.querySelector("#timer-span");

    ////////////////////////////////////////////////////////////////////////////////////
    // gravityFunc(spriteHolder, groundObj);

    ////////////////////////////////////////////////////////////////////////////////////

    timerSpan.innerHTML = gamespace.data[space_key.index].gameInstance.data.timer;

    if (gamespace.data[space_key.index].gameInstance.data.timer < 25) {
        console.log(`=======================`);
        console.log(`gamespace.data[space_key.index].gameInstance.data.timer: ${gamespace.data[space_key.index].gameInstance.data.timer}`);

        console.log(`=======================`);
        if (gamespace.data[space_key.index].gameInstance.data.timer <= 0 || gamespace.data[space_key.index].gameInstance.player.sprite.beingType === "sasquatch") { // becomes human
            console.log("As a shapeshifter, your transformation begins!");
            // window.requestAnimationFrame(function () {
            gamespace.data[space_key.index].gameInstance.player.sprite.set_timeOfDay(true);
            gamespace.data[space_key.index].gameInstance.player.sprite.shapeshift();
            // window.requestAnimationFrame(gamespace.data[space_key.index].gameInstance.player.sprite.shapeshift);

            // gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "human";

            // if (keyPress_handler.left ||
            //     keyPress_handler.right ||
            //     keyPress_handler.up ||
            //     keyPress_handler.down) {
            //     console.log("already updating shifts through user actions");
            // } else {

            moveAndDisplay.therianthropy(spriteHolder);
            setTimeout(() => {
                moveAndDisplay.shiftLoc(spriteHolder, moveAndDisplay.relativeGridResizeFunc("human"), "human");

                // moveAndDisplay.shiftLoc(spriteHolder, 150);
            }, 2000);

            // moveAndDisplay.idleShift(spriteHolder);

            // };
            // });
        };

    } else if (gamespace.data[space_key.index].gameInstance.data.timer >= 25 && gamespace.data[space_key.index].gameInstance.data.timer < 60) {
        console.log(`=======================`);
        console.log(`gamespace.data[space_key.index].gameInstance.data.timer: ${gamespace.data[space_key.index].gameInstance.data.timer}`);

        console.log(`=======================`);
        if (gamespace.data[space_key.index].gameInstance.data.timer === 25 || gamespace.data[space_key.index].gameInstance.player.sprite.beingType === "human") { // become sasquatch
            console.log("As a shapeshifter, your transformation begins!");
            // window.requestAnimationFrame(function () {
            //     shapeshift = true;
            gamespace.data[space_key.index].gameInstance.player.sprite.set_timeOfDay(false);
            gamespace.data[space_key.index].gameInstance.player.sprite.shapeshift();
            // window.requestAnimationFrame(gamespace.data[space_key.index].gameInstance.player.sprite.shapeshift);

            // gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "sasquatch";
            //     console.log(spriteHolder);
            // });
            // if (keyPress_handler.left ||
            //     keyPress_handler.right ||
            //     keyPress_handler.up ||
            //     keyPress_handler.down) {
            //     console.log("already updating shifts through user actions");
            // // } else {

            moveAndDisplay.shiftLoc(spriteHolder, moveAndDisplay.relativeGridResizeFunc("sasquatch"), "sasquatch");
            // moveAndDisplay.shiftLoc(spriteHolder, adjustedSize);
            // moveAndDisplay.shiftLoc(spriteHolder, 300);
            moveAndDisplay.therianthropy(spriteHolder);

            // moveAndDisplay.idleShift(spriteHolder);

            // };
        };

    } else if (gamespace.data[space_key.index].gameInstance.data.timer >= 60) {
        clientStart = Date.now();
        console.log(`=======================`);
        console.log(`gamespace.data[space_key.index].gameInstance.data.timer: ${gamespace.data[space_key.index].gameInstance.data.timer}`);

        console.log(`restart gamespace.data[space_key.index].gameInstance.data.timer!`);
        console.log(`=======================`);
    };

    // find difference in seconds:
    gamespace.data[space_key.index].gameInstance.data.timer = Math.floor((Date.now() - clientStart) / 1000);

    return gamespace.data[space_key.index].gameInstance.data.timer;
};

module.exports = timeKeeper;