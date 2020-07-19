const space_key = require("../../../../data/instance-data");
const gamespace = require("../../../../data/game-space");
const sprite_Data = gamespace.data.length < 1 ? {beingType: "human"} : gamespace.data[space_key.index].gameInstance.player.sprite;
const moveAndDisplay = require("../move-and-display");
const keyPress_handler = require("../../client/keypress-handler");

const moveSpriteDiv = function (keyPressed, spriteHolderElem, eventType) {

    console.log("keyPress_handler:");
    console.log(keyPress_handler);

    if (eventType === "keydown") {

        // if state is false and "keydown", then change state to true and fire moveMethod once:
        if (moveAndDisplay[keyPressed][sprite_Data.beingType].keyState === false) { // if (false):
            let bool = true;
            moveAndDisplay.changeKeyState(keyPressed, bool);
            moveAndDisplay.moveMethod(keyPressed, spriteHolderElem);
            // updatePos(sprite_Data);
        }; // else (true) { do nothing }

    } else { // "keyup"
        let bool = false;
        moveAndDisplay.changeKeyState(keyPressed, bool);
    };
};

module.exports = moveSpriteDiv;