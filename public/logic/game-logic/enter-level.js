const Sprite_Physics = require("../class/sprite-physics-class");
const moveAndDisplay = require("../sprite-logic/move-and-display/move-and-display");
const setGameField = require("../builder/set-game-field");

const enterLevel = function (timeKeeper, myGameInfo) {

    // // test ONLY:
    // let groundTop = document.querySelector(".square-grass").getBoundingClientRect().top;

    // console.log("groundTop");
    // console.log(groundTop);

    // const levelObj = {
    //     xPos: 500,
    //     yPos: groundTop - 100,
    //     width: 100,
    //     height: 100,
    //     elemType: "div",
    //     class_actorType: "enemy",
    //     class_moveType: "bounce",
    //     id: "enemy-02",
    //     imgUrl: "/images/cryo-bot.png"
    // };

    // const levelObj_1 = {
    //     xPos: 700,
    //     yPos: groundTop - 100,
    //     width: 100,
    //     height: 100,
    //     elemType: "div",
    //     class_actorType: "enemy",
    //     class_moveType: "bounce",
    //     id: "enemy-01",
    //     imgUrl: "/images/cryo-bot.png"
    // };

    // drawLevel("game-screen", levelObj);
    // drawLevel("game-screen", levelObj_1);

    let {
        spriteName,
        gamespace,
        SpaceID,
        SpaceIndex,
        space_key,
        myGameInstance
    } = myGameInfo;

    // let obstacleObject = gamespace.data[space_key.index].gameInstance.data.data.obstacleObject;

    let levelID = myGameInstance.player.currentLevel;
    console.info("levelID");
    console.info(levelID);
    // console.info(myGameInstance);

    // let promise = new Promise(function (resolve, reject) {
    //     console.log("promise begins!")
    //     return resolve(setGameField(levelID));
    // });
    // promise
    //     .then(function (result) {
    setGameField(levelID, function (obstacleObject, newElem_ID) {
        console.info("newElem_ID");
        console.info(newElem_ID);

        const myPhysics = new Sprite_Physics("my-grid", obstacleObject, newElem_ID);
        // const myPhysics = new Sprite_Physics("game-screen", obstacleObject, newElem_ID);

        gamespace.data[space_key.index].gameInstance.player.sprite.physics = myPhysics;
        console.info(gamespace.data[space_key.index].gameInstance.player.sprite);


        //////////////////////////////////////////////////////////////////
        // testing enemy animation (gravity and velocity):
        //////////////////////////////////////////////////////////////////
        const animateFrame = require("./animate-frame");

        animateFrame(100, gamespace, space_key);

        return setInterval(timeKeeper, 1000);
    });

    // });
};

module.exports = enterLevel;