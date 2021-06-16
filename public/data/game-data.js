const level_data = require("./level-data");
const populateEnemy = require("./populate-level-enemy-data");

const gameData = {
    // level_data: require("./level-data"),
    // populateEnemy: require("./populate-level-enemy-data"),

    roomID: "60c9690e91e2ddf727f4ba7e", // placeholder
    currentLevel: 01, // default value, set by player_data
    timer: 0,
    points: 0,
    data: {}, // TODO: add to gamescreen method

    set_gameData: function () {
        populateEnemy.loop(this.currentLevel, this.data.enemyTot);
        this.data.enemy = populateEnemy.spawn; // populated by level loader
    },

    loadLevel: function (level) {

        this.data = level_data.build(level);
        console.info(this.data);
        this.currentLevel = level;
        console.info(this.currentLevel);

        this.set_gameData();
    },
};

module.exports = gameData;