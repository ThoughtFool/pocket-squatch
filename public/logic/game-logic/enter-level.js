// let start = Date.now();

const enterLevel = function (timeKeeper) {
    // const timeKeeper = require("../game-logic/time-keeper");

    // const timeKeeper = function () {

    //     if (roomInstance.data.timer < 15) {
    //         roomInstance.player.sprite.timeOfDay = "daybreak";
    //         console.log(`=======================`);
    //         console.log(`roomInstance.data.timer: ${roomInstance.data.timer}`);

    //         console.log(`=======================`);
    //         if (roomInstance.data.timer <= 0) {
    //             console.log("As a shapeshifter, your transformation begins!");
    //             roomInstance.player.sprite.transform();
    //             // test data:
    //             // console.log(sprite_Lyric);
    //         };

    //     } else if (roomInstance.data.timer >= 15 && roomInstance.data.timer < 30) {
    //         roomInstance.player.sprite.timeOfDay = "nightfall";
    //         console.log(`=======================`);
    //         console.log(`roomInstance.data.timer: ${roomInstance.data.timer}`);

    //         console.log(`=======================`);
    //         if (roomInstance.data.timer === 15) {
    //             console.log("As a shapeshifter, your transformation begins!");
    //             roomInstance.player.sprite.transform();
    //             // test data:
    //             // console.log(sprite_Lyric);
    //         };

    //     } else if (roomInstance.data.timer >= 30) {
    //         start = Date.now();
    //         console.log(`=======================`);
    //         console.log(`roomInstance.data.timer: ${roomInstance.data.timer}`);

    //         console.log(`restart roomInstance.data.timer!`);
    //         console.log(`=======================`);
    //     };

    //     // find difference in seconds:
    //     return roomInstance.data.timer = Math.floor((Date.now() - start) / 1000);
    // };

    return setInterval(timeKeeper, 1000);
};

module.exports = enterLevel;