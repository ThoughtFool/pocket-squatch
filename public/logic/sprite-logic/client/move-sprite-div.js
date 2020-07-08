const gamespace = require("../../../data/game-space");
// const sprite_Data = gamespace.data[0].gameInstance.player.sprite;
const sprite_Data = gamespace.data.length < 1 ? {beingType: "human"} : gamespace.data[0].gameInstance.player.sprite;

const moveAndDisplay = require("./move-and-display");

const moveSpriteDiv = function (keyPressed, sprite_holderClassName, eventType) {
    let spriteHolderElem = document.querySelector(`.${sprite_holderClassName}`);

    if (eventType === "keydown") {

        console.log("moveAndDisplay[keyPressed][sprite_Data.beingType].keyState");
        console.log(moveAndDisplay[keyPressed][sprite_Data.beingType].keyState);

        // if state is false and "keydown", then change state to true and fire moveMethod once:
        if (moveAndDisplay[keyPressed][sprite_Data.beingType].keyState === false) { // if (false):
            moveAndDisplay.moveMethod(keyPressed, spriteHolderElem);
            let bool = true;
            moveAndDisplay.changeState(keyPressed, bool);
        }; // else (true) { do nothing }

    } else { // "keyup"
        let bool = false;
        moveAndDisplay.changeState(keyPressed, bool);
    };
};

module.exports = moveSpriteDiv;