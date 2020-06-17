const Sprite = require("./sprite-logic");
const actionTypes = require("./action-types");
let start = Date.now();
let timer = 0;

// test data:
const gameData = {
    enemySprite: {
        health: 100
    }
};

const timeKeeper = function () {
    
    if (timer < 15) {
        sprite_Lyric.timeOfDay = "daybreak";
        console.log(`=======================`);
        console.log(`timer: ${timer}`);
        console.log(`=======================`);
        if (timer <= 0) {
            sprite_Lyric.transform();
            console.log(sprite_Lyric);
            console.log(sprite_Lyric.takeAction("strike", gameData));

        };
        
    } else if (timer >= 15 && timer < 30) {
        sprite_Lyric.timeOfDay = "nightfall";
        console.log(`=======================`);
        console.log(`timer: ${timer}`);
        console.log(`=======================`);
        if (timer === 15) {
            sprite_Lyric.transform();
            console.log(sprite_Lyric);
            console.log(sprite_Lyric.takeAction("strike", gameData));

        };

    } else if (timer >= 30) {
        start = Date.now();
        console.log(`=======================`);
        console.log(`timer: ${timer}`);
        console.log(`restart timer!`);
        console.log(`=======================`);
    };
    timer = Math.floor((Date.now() - start) / 1000);

    // if (timer === 0) {
    //     sprite_Lyric.transform();
    //     console.log(sprite_Lyric);
    // } else if (timer === 15) {    
    //     sprite_Lyric.transform();
    //     console.log(sprite_Lyric);
    // } else if (timer >= 30) {
    //     start = Date.now();
    // };
    
    
    // run checker for transformations?
};

const sprite_Lyric = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes); // name, health, hasStoneQueen, timeOfDay, asleep, timer
setInterval(timeKeeper, 1000);



// console.log(sprite_Lyric.takeAction("strike", gameData));
// var startTime, endTime;

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