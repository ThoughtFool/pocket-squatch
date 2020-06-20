const actionTypes = {

    human: {
        strike: function (stats, beingType) {
            console.log("<<<<<<<<<<<< ATTENTION (strike enemy) >>>>>>>>>>>>");
            console.log(`Enemy health is ${stats.foe.enemySprite.health} minus human power: ${stats.friend[beingType].strength}`);
            console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

            stats.foe.enemySprite.health -= stats.friend.strength;
            console.log(`Enemy health is NOW: ${stats.foe.enemySprite.health}`);

            return stats;
        },

        defend: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        walk: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        run: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        jump: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        fly: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        transform: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats
        },

        // same as "sleep" (stone-queen needs to rest between actions and returns to stone, while "Lyric" sleeps in arms of queen):
        rest: function (stats) {
            stats.friend.strength;
            return stats
        },

        // (stone-queen's stone become increasingly fractured, while "Lyric"'s health is returned during sleep cycles):
        isDefeated: function (gameroom) {
            console.log("Sorry, you have lost this time. Try again?"); // create play again button or auto play level?
            gameroom.player.losses++
            return gameroom;
        },

        isWinner: function (gameroom) {
            console.log("Congrats, you are the winner");
            gameroom.player.currentLevel.completed = true;
            gameroom.player.level[currentLevel + 1].locked = false;
            console.log("currentLevel + 1");
            console.log(currentLevel + 1);
            gameroom.player.wins++
            return gameroom;
        },

        // make this action interchangeable with strike depending on (attacker, defender) parameters:
        receivesDmg: function (stats) { // strings --> ("friend", "foe")?
            console.log("<<<<<<<<<<<< ATTENTION (receivesDmg) >>>>>>>>>>>>");
            console.log(`Your health is ${stats.friend.health} minus enemy power: ${stats.foe.enemySprite.strength}`);
            console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

            stats.friend.health -= stats.foe.enemySprite.strength; //"THIS.enemy?
            console.log(`Enemy health is NOW: ${stats.foe.enemySprite.health}`);
            return stats;

        },

        receivesHealth: function (stats) { // strings --> ("friend", "foe")?
            let powerBonus = Math.floor(stats.friend.strength / 4);

            console.log("<<<<<<<<<<<< ATTENTION (receivesHealth) >>>>>>>>>>>>");
            console.log(`Your health is ${stats.friend.health} plus power health bonus: ${powerBonus}`);
            console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

            stats.friend.health += powerBonus;
            console.log(`Your health is NOW: ${stats.friend.health}`);
            return stats;

        },
    },
    sasquatch: {
        strike: function (stats) {
            console.log("<<<<<<<<<<<< ATTENTION >>>>>>>>>>>>");
            console.log(`Enemy health is ${stats.foe.enemySprite.health} minus sasquatch power: ${stats.friend.strength}`);
            console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

            stats.foe.enemySprite.health -= stats.friend.strength;
            console.log(`Enemy health is NOW: ${stats.foe.enemySprite.health}`);

            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    },
    yeti: {
        strike: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    },
    bigfoot: {
        strike: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    },
    abonimable: {
        strike: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    },
    swampthing: {
        strike: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    },
    sandman: {
        strike: function (stats) {
            stats.foe.enemySprite.health -= stats.friend.strength;
            return stats;
        },

        defend: function (enemySprite) {
            enemySprite.health - stats.friend.strength;
            return enemySprite
        }
    }
};

module.exports = actionTypes;