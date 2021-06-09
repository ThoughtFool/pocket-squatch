const level_data = require("./level-data");
const populateEnemy = require("./populate-level-enemy-data");

const gameData = {
    // level_data: require("./level-data"),
    // populateEnemy: require("./populate-level-enemy-data"),

    roomID: 123, // placeholder
    currentLevel: 0, // default value, set by player_data
    timer: 0,
    points: 0,
    data: {}, // TODO: add to gamescreen method

    set_gameData: function () {
        populateEnemy.loop(this.currentLevel, this.data.enemyTot);
        this.data.enemy = populateEnemy.spawn; // populated by level loader
    },

    loadLevel: function (level) {
        this.data = level_data.build(level);
        this.currentLevel = level;

        this.set_gameData();
    },
};

module.exports = gameData;