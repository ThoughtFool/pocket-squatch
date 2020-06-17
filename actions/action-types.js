const actionTypes = {
    strike: {
        human: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },
        sasquatch: "test2"
    },
    human: {
        strike: function (gameData, stats) {
            console.log(`${gameData.enemySprite.health} minus ${stats.strength}`);
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        }
    },
    sasquatch: {
        strike: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    }
};

module.exports = actionTypes;