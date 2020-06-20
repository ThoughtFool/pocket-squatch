const Sprite = require("./sprite-logic");
const actionTypes = require("./action-types");
let start = Date.now();
// let timer = 0;

const startGame = function (gameData, gameroom) {
    const sprite_Lyric = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, gameData); // name, health, hasStoneQueen, timeOfDay, asleep, timer
    gameroom.player = sprite_Lyric;
    gameroom.timer = 0;

    const timeKeeper = function () {

        if (gameroom.timer < 15) {
            sprite_Lyric.timeOfDay = "daybreak";
            console.log(`=======================`);
            console.log(`gameroom.timer: ${gameroom.timer}`);

            console.log(`=======================`);
            if (gameroom.timer <= 0) {
                console.log("As a shapeshifter, your transformation begins!");
                sprite_Lyric.transform();
                // test data:
                // console.log(sprite_Lyric);
            };

        } else if (gameroom.timer >= 15 && gameroom.timer < 30) {
            sprite_Lyric.timeOfDay = "nightfall";
            console.log(`=======================`);
            console.log(`gameroom.timer: ${gameroom.timer}`);

            console.log(`=======================`);
            if (gameroom.timer === 15) {
                console.log("As a shapeshifter, your transformation begins!");
                sprite_Lyric.transform();
                // test data:
                // console.log(sprite_Lyric);
            };

        } else if (gameroom.timer >= 30) {
            start = Date.now();
            console.log(`=======================`);
            console.log(`gameroom.timer: ${gameroom.timer}`);

            console.log(`restart gameroom.timer!`);
            console.log(`=======================`);
        };

        // find difference in seconds:
        return gameroom.timer = Math.floor((Date.now() - start) / 1000);
    };
    setInterval(timeKeeper, 1000);
    console.log(gameroom);
    return gameroom;
};

module.exports = startGame;

// function start() {
//     startTime = new Date();
// };

// function end() {
//     endTime = new Date();
//     var timeDiff = endTime - startTime; //in ms
//     // strip the ms
//     timeDiff /= 1000;

//     // get seconds 
//     var seconds = Math.round(timeDiff);
//     console.log(seconds + " seconds");
// };