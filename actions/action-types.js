const actionTypes = {

    human: {
        strike: function (gameData, stats) {
            console.log(`Enemy health: ${gameData.enemySprite.health} minus human power: ${stats.strength}`);
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
            console.log(`Enemy health: ${gameData.enemySprite.health} minus sasquatch power: ${stats.strength}`);
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    },
    yeti: {
        strike: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    },
    bigfoot: {
        strike: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    },
    abonimable: {
        strike: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    },
    swampthing: {
        strike: function (gameData, stats) {
            gameData.enemySprite.health -= stats.strength;
            return gameData.enemySprite
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.strength;
            return enemySprite
        }
    },
    sandman: {
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