const Sprite = require("./sprite-logic");
const actionTypes = require("./action-types");
let start = Date.now();
let timer = 0;

const startGame = function (gameData, gameroom) {
    const sprite_Lyric = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, gameData); // name, health, hasStoneQueen, timeOfDay, asleep, timer
    gameroom.player = sprite_Lyric;

    const timeKeeper = function () {
        
        if (timer < 15) {
            sprite_Lyric.timeOfDay = "daybreak";
            console.log(`=======================`);
            console.log(`timer: ${timer}`);
            
            console.log(`=======================`);
            if (timer <= 0) {
                sprite_Lyric.transform();
                // test data:
                console.log(sprite_Lyric);    
            };
            
        } else if (timer >= 15 && timer < 30) {
            sprite_Lyric.timeOfDay = "nightfall";
            console.log(`=======================`);
            console.log(`timer: ${timer}`);
            
            console.log(`=======================`);
            if (timer === 15) {
                sprite_Lyric.transform();
                // test data:
                console.log(sprite_Lyric);
            };
    
        } else if (timer >= 30) {
            start = Date.now();
            console.log(`=======================`);
            console.log(`timer: ${timer}`);
            
            console.log(`restart timer!`);
            console.log(`=======================`);
        };
        
        // find difference in seconds:
        return timer = Math.floor((Date.now() - start) / 1000);
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