const Sprite_Physics = require("../class/sprite-physics-class");
const drawLevel = require("./draw-level");

const enterLevel = function (timeKeeper, myGameInfo) {
    
    // test ONLY:
    let groundTop = document.querySelector(".ground").getBoundingClientRect().top;

    console.log("groundTop");
    console.log(groundTop);
    
    const levelObj = {
        xPos: 500,
        yPos: groundTop - 100,
        width: 100,
        height: 100,
        elemType: "div",
        class_actorType: "enemy",
        class_moveType: "bounce",
        id: "enemy-02",
        imgUrl: "/images/cryo-bot.png"
    };


    const levelObj_1 = {
        xPos: 700,
        yPos: groundTop - 100,
        width: 100,
        height: 100,
        elemType: "div",
        class_actorType: "enemy",
        class_moveType: "bounce",
        id: "enemy-01",
        imgUrl: "/images/cryo-bot.png"
    };

    drawLevel("game-screen", levelObj);
    drawLevel("game-screen", levelObj_1);

    let {
            spriteName,
            gamespace,
            SpaceID,
            SpaceIndex,
            space_key,
            myGameInstance
        } = myGameInfo;

    const myPhysics = new Sprite_Physics("game-screen", "ground", "friend", "sprite-holder");
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
        let world = gamespace.data[space_key.index].gameInstance.data.data;
        gamespace.data[space_key.index].gameInstance.player.sprite.physics.updatePos(world);
    //     // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();
    //     timeKeeper(myGameInstance);
        requestAnimationFrame(animateSprite);
    };
    animateSprite();

    return setInterval(timeKeeper, 1000);
};

module.exports = enterLevel;