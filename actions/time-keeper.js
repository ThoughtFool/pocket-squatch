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
const Sprite = require("./sprite-logic");


let start = Date.now();
let timer = 0;
// const timeKeeper = function () {
//     if (timer >= 30) {
//         start = Date.now();
//     };
//     timer = Math.floor((Date.now() - start) / 1000);
//     // return timer;
//     console.log(timer);
//     // the difference will be in ms
// };

const sprite_Lyric = new Sprite("Lyric", 100, true, "daybreak"); // name, health, hasStoneQueen, timeOfDay, asleep, timer
console.log(sprite_Lyric);

const timeKeeper = function () {
    
    if (timer >= 15) {
        sprite_Lyric.timeOfDay = "nightfall";
        console.log(sprite_Lyric);
        console.log("timer:");
        console.log(timer);
        
    } else if (timer < 15) {
        sprite_Lyric.timeOfDay = "daybreak";
        console.log(sprite_Lyric);
        console.log("timer:");
        console.log(timer);
    };
    sprite_Lyric.transform();

    if (timer >= 30) {
        start = Date.now();
    };

    timer = Math.floor((Date.now() - start) / 1000);

    // run checker for transformations?
};


setInterval(timeKeeper, 1000);