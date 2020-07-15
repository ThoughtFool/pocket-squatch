const moveSpriteDiv = require("../move-and-display/methods/move-sprite-div");
const keyPress_handler = require("./keypress-handler");

const btnDownUp = function (event) {

    event.preventDefault();
    let keyCode = event.keyCode;
    let eventType = event.type;
    let keyState;

    if (eventType == "keydown") {
        keyState = true;
    } else {
        keyState = false;
    };
    
    if (keyState) {
        keyPress_handler.any = true;
    };

    if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40 || keyCode == 76 || keyCode == 32) {
        // TODO: add switch statement below:

        if (keyCode == 37) { // Move: LEFT
            keyPress_handler.left = keyState;

        } else if (keyCode == 38) { // Move: UP ("stone queen") JUMP (!"stone queen")
            keyPress_handler.up = keyState;

        } else if (keyCode == 39) { // Move: RIGHT
            keyPress_handler.right = keyState;

        } else if (keyCode == 40) { // Move: DOWN ("stone queen")
            keyPress_handler.down = keyState;

        } else if (keyCode == 76 || keyCode == 32) { // transform: FLY ("stone queen")
            keyPress_handler.any = keyState; // may need to change based on isShapeshifted();

        };

        console.log(`keyCode: ${keyCode}`);
        let sprite_holderClassName = "transform-holder";
        let spriteHolderElem = document.querySelector(`.${sprite_holderClassName}`);

        return moveSpriteDiv(keyCode, spriteHolderElem, eventType);
    };
};

module.exports = btnDownUp;