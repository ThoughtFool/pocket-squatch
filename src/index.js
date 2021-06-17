const player_data = require("../public/data/player-data");
const enterGame = require("../public/logic/game-logic/enter-game");
const enterLevel = require("../public/logic/game-logic/enter-level");
const timeKeeper = require("../public/logic/game-logic/time-keeper");

const fetchFunc = require("../routes/fetch-func");
const modalLoader = require("../public/logic/modal-loader");

// Block-Builder:
const createBoard = require("../public/logic/builder/create-board");
const contentBuilder = require("../public/logic/builder/content-builder");
const level_data = require("../public/data/level-data");
let contentIDArray;

//////////////////////////////////////////////////////////////////
// Add click event for saving user levels:
const saveNewLevelBtn = document.getElementById("save-level");
const makeNewLevelBtn = document.getElementById("make-level");
const getNewElemsBtn = document.getElementById("get-new-elems");
const loadMyLevelBtn = document.getElementById("time-stamp-id");

const playMyLevelsBtn = document.getElementById("play-your-levels-btn");

if (saveNewLevelBtn !== null) {

    const gamescreen = document.getElementById("game-screen");
    const gamescreen_coords = gamescreen.getBoundingClientRect();

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
    // let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "ground", "square-soil", "square-sky", "square-night"];

    let gridSize = gamescreen_coords.height;
    // let gridSize = vh * .75;
    const parentElems_coords = [];

    let gridClassName = "game-grid";
    let gridID = "my-grid";

    const gameField = document.querySelector("#game-field");
    const grid = document.createElement("div");
    grid.className = gridClassName;
    grid.id = gridID;
    gameField.appendChild(grid);

    const gameGrid = document.querySelector(`#${gridID}`);
    // const gameGrid = document.querySelector(".game-grid");
    // gameGrid.style.width = `${gridSize}px`;
    // gameGrid.style.height = `${gridSize}px`;

    gameGrid.style.width = `100%`;
    gameGrid.style.height = `100%`;

    let whereAppend = gameGrid;
    // let numSquares = 100;
    let numSquares = 400;
    // let numSquares = 625;

    console.log("gameGrid.clientHeight");
    console.log(gameGrid.clientHeight);

    contentIDArray = createBoard(whereAppend, numSquares, gridSize);
    console.log("contentIDArray");
    console.log(contentIDArray);

    let promise = new Promise(function (resolve, reject) {
        console.log("promise...");
        modalLoader("add", "#game-screen");

        let url = "/levels";

        return resolve(fetchFunc(url, { mode: 'cors' }));
    });

    promise
        .then(function (response) {
            console.log(response);

            function ObjById(obj) {
                let currentId = obj._id;
                level_data.data[currentId] = obj;
                return currentId;
            };

            const ObjectIdArray = response.map(ObjById);
            console.log("ObjectIdArray:");
            console.log(ObjectIdArray);

            console.log("level_data:");
            console.log(level_data);

            return ObjectIdArray;

            // for (let id in response) {
            //     level_data.data[id] = response;
            // };

        })
        .then(function (response) {
            console.log(response);

            return modalLoader("remove", "#game-screen");
        });

    level_data.contentIDArray = contentIDArray;

    const saveLevel = require("../public/logic/builder/save-level");
    saveNewLevelBtn.addEventListener("click", saveLevel, false);

    contentBuilder(squareContentArray, level_data.contentIDArray, level_data);
    // contentBuilder(squareContentArray, contentIDArray, level_data, levelID);


    const darkGrayBrush = document.getElementById("dark-gray-brush");

    // if (darkGrayBrush !== null) {
    const purpleBrush = document.getElementById("purple-brush");
    const redBrush = document.getElementById("red-brush");
    const blueBrush = document.getElementById("blue-brush");
    const greenBrush = document.getElementById("green-brush");
    const brownBrush = document.getElementById("brown-brush");
    const lightBlueBrush = document.getElementById("light-blue-brush");
    const blackBrush = document.getElementById("black-brush");

    // const brushListener = function () {
    let paletteBrushes = document.getElementsByClassName("palette");
    for (let i = 0; i < paletteBrushes.length; i++) {
        paletteBrushes[i].addEventListener("click", function (e) {
            darkGrayBrush.classList.remove("in-use");
            purpleBrush.classList.remove("in-use");
            redBrush.classList.remove("in-use");
            blueBrush.classList.remove("in-use");
            greenBrush.classList.remove("in-use");
            brownBrush.classList.remove("in-use");
            lightBlueBrush.classList.remove("in-use");
            blackBrush.classList.remove("in-use");
            console.log(`You chose the ${e.target.id}.`);
            if (!e.target.classList.contains("in-use")) {
                e.target.classList.add("in-use");
            };
        });
    };
    // };

    const createLevel = require("../public/logic/builder/create-level");
    makeNewLevelBtn.addEventListener("click", createLevel, false);
    const getNewElems = require("../public/logic/builder/get-new-elems");
    getNewElemsBtn.addEventListener("click", getNewElems, false);

    const loadMyLevel = require("../public/logic/builder/load-my-level");
    loadMyLevelBtn.addEventListener("change", loadMyLevel, false);

    playMyLevelsBtn.addEventListener("click", function () {
        // event.preventDefault();
        let level_data = require("../public/data/level-data");
        console.log("playMyLevelsBtn fires...");
        console.log(level_data);

        // testing ONLY (user input needed):

        return level_data;
    });

};

// test ONLY:
const enterGameBtn = document.getElementById("enter-game-btn");
const enterLevelBtn = document.getElementById("enter-level-btn");
const enemyBtn = document.getElementById("enemy-btn");
const createSprite = document.getElementById("create-sprite");

let myGameInfo;
let transformTimer;

if (enterGameBtn !== null) {
    console.log(enterGameBtn)
    enterGameBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Entering game...");

        // testing ONLY (user input needed):
        let spriteName = createSprite.value;
        myGameInfo = enterGame(spriteName, player_data);

        return myGameInfo;
    });
    // };

    // if (enterLevelBtn !== null) {
    enterLevelBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Entering level...");

        console.log("myGameInfo:");
        console.log(myGameInfo);

        return enterLevel(timeKeeper, myGameInfo);
    });
    // };

    console.log = function () { };
    //////////////////////////////////////////////////////////////////
    // test data: need to move backend logic to front for testing: (object-based game physics)
    //////////////////////////////////////////////////////////////////

    // called when game is iniated;
    const Game_Screen = require("../public/logic/game-logic/_TBD/gamescreen-class");
    const myGamescreen = new Game_Screen("game-screen", "fullscreen");
    console.log("myGamescreen");
    console.log(myGamescreen);

    // places sprite and is called after game is iniated:
    const createSpriteElem = function (gameSpace_Data, gameScreen_ID, ground_ID,) {

    };



    // //////////////////////////////////////////////////////////////////
    // // create Sprite:
    // const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes); // name, health, hasStoneQueen, isDaytime, asleep, timer

    // // add Sprite to player:
    // player_data.sprite = sprite_data;

    // // set game level:
    // game_data.loadLevel(player_data.currentLevel);

    // // create gameroom instance:
    // const myGameInstance = new Gameroom_Instance(player_data, game_data);

    // // game space:
    // const gamespace = require("../public/data/game-space");

    // // set gameroom instance and timestamp id:
    // gamespace.setData(myGameInstance);

    // console.log("gamespace.data[0].gameInstance.player.sprite");
    // console.log(gamespace.data[0].gameInstance.player.sprite);
    // //////////////////////////////////////////////////////////////////

    // const sprite_data = new Sprite("Lyric", 100, 25, true, "daybreak", actionTypes, enemy_data);

    // gameroom.player = sprite_data;
    // gameroom.enemy = enemy_data;
    // gameroom.data.timer = 0;

    // const Sprite_Physics = require("../public/logic/class/sprite-physics-class");
    // const testSprite = new Sprite_Physics("game-screen", "ground", "foe", "enemy-02", 2, 1, .8, 300, 300);
    // // const testSprite = new Sprite_Physics("game-screen", "ground-01", "foe", "enemy-02", 2, 1, .8, 300, 300);
    // console.log("testSprite:");
    // console.log(testSprite);

    //////////////////////////////////////////////////////////////////
    // instance builder class:
    //////////////////////////////////////////////////////////////////

    // level_data.enemy = enemy_data;  OR
    // enemy_data = level_data.enemy;
    // const populate_level_enemy_data = require("../public/data/populate-level-enemy-data");

    // const myInstance = new Build_Instance(actionTypes, player_data, sprite_data, level_data, enemy_data, game_data, populate_level_enemy_data, gameroom_data, myGamescreen, testSprite);


    //////////////////////////////////////////////////////////////////
    // testing enemy animation (gravity and velocity):
    //////////////////////////////////////////////////////////////////

    // function animateSprite() {
    //     requestAnimationFrame(animateSprite);
    //     testSprite.updatePos();
    // };
    // animateSprite();


    //////////////////////////////////////////////////////////////////
    // initiates client-side timer for transformations:
    //////////////////////////////////////////////////////////////////

    // const timeKeeper = require("../public/logic/game-logic/time-keeper");
    // setInterval(timeKeeper, 1000);

    //////////////////////////////////////////////////////////////////
    // event listener for moving player sprite(s):
    //////////////////////////////////////////////////////////////////

    const btnDownUp = require("../public/logic/sprite-logic/client/btn-down-up");
    document.addEventListener("keydown", btnDownUp, false);
    document.addEventListener("keyup", btnDownUp, false);
};
