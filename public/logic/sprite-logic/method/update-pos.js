const keyPress_handler = require("../client/keypress-handler");
const gamespace = require("../../../data/game-space"); // game space (holder)
const space_key = require("../../../data/instance-data");
let world = (space_key.index != null) ? gamespace.data[space_key.index].gameInstance.data.data : {};

const updatePos = function () {
    // react to keyPress_handler state
    console.log("this.onGround");
    console.log(this.onGround);

    if (keyPress_handler.up && this.onGround) {
        this.dy = this.jumpPower;
    };

    if (keyPress_handler.left) {
        this.dx = -this.moveSpeed;
    };

    if (keyPress_handler.right) {
        this.dx = this.moveSpeed;
    };

    if (keyPress_handler.isSummoned && !this.isSummoned) {
        this.isSummoned = true;
    } else if (keyPress_handler.isSummoned && this.isSummoned) {
        this.isSummoned = false;

        // if (keyPress_handler.up && this.isSummoned) {
        //     this.dy = this.moveSpeed;
        // }
        // if (keyPress_handler.left) {
        //     this.dx = -this.moveSpeed;
        // }
        // if (keyPress_handler.right) {
        //     this.dx = this.moveSpeed;
        // };
        // gamespace.data[space_key.index].gameInstance.player.sprite.isSummoned = true;
    };

    // apply gravity drag and move player
    // TODO: add to level class based on environmental factors, then add to player upon entering level:
    this.dy += world.gravity;
    this.dy *= world.drag;
    this.dx *= this.onGround ? world.groundDrag : world.drag;
    this.xPos += this.dx;
    this.yPos += this.dy;

    // test ground contact and left and right limits
    if (this.yPos + this.width >= world.ground) {
        this.yPos = world.ground - this.width;
        this.dy = 0;
        this.onGround = true;
    } else {
        this.onGround = false;
    }
    if (this.xPos > 950) {
        this.xPos -= 950;
    } else if (this.xPos + this.width < 0) {
        this.xPos += 950;
    };
};

module.exports = updatePos;