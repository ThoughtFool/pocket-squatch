const Sprite = require("../class/sprite-logic"); // creates player "in-game" sprite
const actionTypes = require("../sprite-logic/method/action-types");
const Gameroom_Instance = require("../class/gameroom-instance"); // game instance (1 of many)
const gamespace = require("../../data/game-space"); // game space (holder)
const game_data = require ("../../data/game-data");

const enterGame = function (spriteName, player_data) {

    // create Sprite:
    const sprite_data = new Sprite(spriteName, 100, 25, true, "daybreak", actionTypes); // name, health, hasStoneQueen, timeOfDay, asleep, timer
    
    // add Sprite to player:
    player_data.sprite = sprite_data; // TODO: create a profile/player class
    
    // set game level:
    game_data.loadLevel(player_data.currentLevel);
    
    // create gameroom instance:
    const myGameInstance = new Gameroom_Instance(player_data, game_data);
    
    // set gameroom instance and timestamp id:
    gamespace.setData(myGameInstance);
    
    return myGameInstance;
};

module.exports = enterGame;

// gamespace creates "holder" for all user/player data needed to play game (achievements, etc.):
// TODO: create a sprite nameChecker(userInput) function:
// TODO: create add-on ids for each new Sprite affiliated with player (many user Sprites can exist in same gamespace),
// *** user can select Sprite by name, gameserver identifies Sprite(s) by player profile (ie: email.spriteName):