// Test ONLY: holder for id and index of data created for new instances:
const space_key = require("../../data/instance-data");

const Sprite = require("../class/sprite-class"); // creates player "in-game" sprite
const actionTypes = require("../sprite-logic/method/action-types");
const Gameroom_Instance = require("../class/gameroom-instance"); // game instance (1 of many)
const gamespace = require("../../data/game-space"); // game space (holder)
const game_data = require("../../data/game-data");
const updateClientScreen = require("./update-client");

const enterGame = function (spriteName, player_data) {

    // create Sprite:
    const sprite_data = new Sprite(spriteName, 100, 25, true, true, actionTypes); // name, health, hasStoneQueen, isDaytime, asleep, timer
    
    // add Sprite to player:
    player_data.sprite = sprite_data; // TODO: create a profile/player class
    
    // set game level:
    game_data.loadLevel(player_data.currentLevel);
    
    // create gameroom instance:
    const myGameInstance = new Gameroom_Instance(player_data, game_data);

    // set gameroom instance and timestamp id:
    let SpaceID = gamespace.setData(myGameInstance);
    space_key.id = SpaceID;
    let SpaceIndex = gamespace.getIndex(SpaceID);
    space_key.index = SpaceIndex;
    
    // Test ONLY:
    let ternaryTest = gamespace.finder("index", SpaceID);
    console.log("ternaryTest");
    console.log(ternaryTest);

    let dataObj = {
        spriteName,
        gamespace,
        SpaceID,
        SpaceIndex,
        space_key,
        myGameInstance,
        // contentIDArray
    };

    console.log(myGameInstance);
    
    ///////////////////////////////////////////////////////////////
    updateClientScreen(dataObj);

    return dataObj;
};

module.exports = enterGame;

// gamespace creates "holder" for all user/player data needed to play game (achievements, etc.):
// TODO: create a sprite nameChecker(userInput) function:
// TODO: create add-on ids for each new Sprite affiliated with player (many user Sprites can exist in same gamespace),
// *** user can select Sprite by name, gameserver identifies Sprite(s) by player profile (ie: email.spriteName):