const timeKeeper = require("./start-game");
const startGame = function () {
    const sprite_Lyric = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes); // name, health, hasStoneQueen, timeOfDay, asleep, timer
    setInterval(timeKeeper, 1000);
};

module.exports = startGame;