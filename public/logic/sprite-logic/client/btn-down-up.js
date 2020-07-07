const moveSpriteDiv = require("./move-sprite-div");

const btnDownUp = function (event) {
    // let shapeshift = isShifted(); TODO: add this method to object moveAndDisplay
    event.preventDefault();
    let keyCode = event.keyCode;
    let eventType = event.type;

    if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40 || keyCode == 76) {
        console.log(`keyCode: ${keyCode}`);
        let sprite_holderClassName = "transform-holder";
        return moveSpriteDiv(keyCode, sprite_holderClassName, eventType);

    };
};

module.exports = btnDownUp;