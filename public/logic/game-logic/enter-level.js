const Sprite_Physics = require("../class/sprite-physics-class");
const space_key = require("../../data/instance-data");
const gamespace = require("../../data/game-space");

const enterLevel = function (timeKeeper) {

    const myPhysics = new Sprite_Physics("game-screen", "ground", "foe", "sprite-holder", 2, 1, .8, 300, 300);
    // const myPhysics = new Sprite_Physics("game-screen", "ground-01", "foe", "enemy-02", 2, 1, .8, 300, 300);
    console.log("myPhysics:");
    console.log(myPhysics);
    gamespace.data[space_key.index].gameInstance.player.sprite.physics = myPhysics;
    console.log(gamespace.data[space_key.index].gameInstance.player.sprite);

    //////////////////////////////////////////////////////////////////
    // testing enemy animation (gravity and velocity):
    //////////////////////////////////////////////////////////////////

    // function animateSprite() {
    //     requestAnimationFrame(animateSprite);
    //     testSprite.updatePos();
    // };
    // animateSprite();

    return setInterval(timeKeeper, 1000);
};

module.exports = enterLevel;