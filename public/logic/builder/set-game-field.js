const createBoard = require("./create-board");
const level_data = require("../../data/level-data");
const contentBuilder = require("./content-builder");
const drawLevel = require("../game-logic/draw-level");

const setGameField = function (levelID, cb) {
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
    let gridSize = vh * .75;

    const gameField = document.querySelector("#game-field");
    const grid = document.createElement("div");
    grid.className = "game-grid";
    gameField.appendChild(grid);

    const gameGrid = document.querySelector(".game-grid");
    gameGrid.style.width = `${gridSize}px`;
    gameGrid.style.height = `${gridSize}px`;

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
            contentBuilder(squareContentArray, contentIDArray, level_data, levelID);
        })
        .then(function (contentIDArray) {
            let obstacleObject = {
                ground_className: "square-grass",
                // obstacle_className: "obstacle",
                wall_className: "square-wall",
                enemy_className: "enemy",
                powerup_className: "powerup",
            };
            return cb(obstacleObject, contentIDArray);
        });

    // contentIDArray = createBoard(whereAppend, numSquares, gridSize);
    // console.info("contentIDArray");
    // console.info(contentIDArray);

    // contentBuilder(squareContentArray, contentIDArray, level_data, levelID);

    // return cb();
};

module.exports = setGameField;