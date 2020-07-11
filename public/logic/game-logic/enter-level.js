const Sprite_Physics = require("../class/sprite-physics-class");
// const space_key = require("../../data/instance-data");
// const gamespace = require("../../data/game-space");

const enterLevel = function (timeKeeper, myGameInfo) {

    let {
            gamespace,
            SpaceID,
            SpaceIndex,
            space_key
        } = myGameInfo;

    const myPhysics = new Sprite_Physics("game-screen", "ground", "foe", "sprite-holder", 1, .7, .85, 300, 300);
    // const myPhysics = new Sprite_Physics("game-screen", "ground-01", "foe", "enemy-02", 2, 1, .8, 300, 300);
    console.log("myPhysics:");
    console.log(myPhysics);

    console.log("space_key.index:");
    console.log(space_key.index);

    gamespace.data[space_key.index].gameInstance.player.sprite.physics = myPhysics;
    console.log(gamespace.data[space_key.index].gameInstance.player.sprite);

    //////////////////////////////////////////////////////////////////
    // testing enemy animation (gravity and velocity):
    //////////////////////////////////////////////////////////////////

    function animateSprite() {
        requestAnimationFrame(animateSprite);
        gamespace.data[space_key.index].gameInstance.player.sprite.physics.updatePos();
    };
    animateSprite();

    return setInterval(timeKeeper, 1000);
};

module.exports = enterLevel;