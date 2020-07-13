const moveSpriteDiv = require("./move-sprite-div");

const btnDownUp = function (event) {

    event.preventDefault();
    let keyCode = event.keyCode;
    let eventType = event.type;
    let keyState;

    // if (eventType == "keydown") {
    //     keyState = true;
    // } else {
    //     keyState = false;
    // };

    if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40 || keyCode == 76) {
        console.log(`keyCode: ${keyCode}`);
        let sprite_holderClassName = "transform-holder";
        let spriteHolderElem = document.querySelector(`.${sprite_holderClassName}`);

        return moveSpriteDiv(keyCode, spriteHolderElem, eventType);
    };
};

module.exports = btnDownUp;