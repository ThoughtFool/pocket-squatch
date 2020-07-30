const createBoard = require("./create-board");
const level_data = require("../../data/level-data");
const contentBuilder = require("./content-builder");
const drawLevel = require("../game-logic/draw-level");

const setGameField = function (levelID, cb) {
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
    let gridSize = vh * .95;

    const gameField = document.querySelector("#game-field");
    const grid = document.createElement("div");
    grid.className = "game-grid";
    grid.id = "my-grid";
    gameField.appendChild(grid);

    const gameGrid = document.querySelector(".game-grid");
    gameGrid.style.width = `${gridSize}px`;
    gameGrid.style.height = `${gridSize}px`;
    gameGrid.style.position = "relative";

    let whereAppend = gameGrid;
    let numSquares = 400;

    console.log("gameGrid.clientHeight");
    console.log(gameGrid.clientHeight);

    let promise = new Promise(function (resolve, reject) {
        console.log("promise begins!")
        return resolve(createBoard(whereAppend, numSquares, gridSize));
    });
    promise
        .then(function (contentIDArray) {
            console.info("contentIDArray");
            console.info(contentIDArray);
            return contentBuilder(squareContentArray, contentIDArray, level_data, levelID);
        })
        .then(function (contentIDArray) {
            let levelObj = {
                xPos: 700,
                yPos: 500,
                width: 200,
                height: 200,
                elemType: "div",
                class_actorType: "transform-holder",
                class_moveType: "move-stand",
                id: "sprite-holder",
                imgUrl: "/images/lyric-stand.png"
            };
            return drawLevel("my-grid", levelObj, contentIDArray);
        })
        .then(function (newElem) {
            console.log("newElem");
            console.log(newElem);

            let obstacleObject = {
                ground_className: "square-grass",
                wall_className: "square-wall",
                enemy_className: "enemy",
                powerup_className: "powerup",
                // obstacle_className: "obstacle",
            };
            return cb(obstacleObject, newElem.id);
        });

    // contentIDArray = createBoard(whereAppend, numSquares, gridSize);
    // console.info("contentIDArray");
    // console.info(contentIDArray);

    // contentBuilder(squareContentArray, contentIDArray, level_data, levelID);

    // return cb();
};

module.exports = setGameField;