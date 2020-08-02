const createBoard = require("./create-board");
const level_data = require("../../data/level-data");
const contentBuilder = require("./content-builder");
const drawLevel = require("../game-logic/draw-level");
const getNewElems = require("./get-new-elems");
const sortSquares = require("./sort");
const sortAlphaNum = require("./sort-by-id");
const seperateSquares = require("./join-divs/seperate-squares");
const compareSquares = require("./join-divs/_compare-squares");
const createLevelObj = require("./join-divs/create-level-obj");
const sortAllSquares = require("./join-divs/sort-all-squares");

const setGameField = function (levelID, cb) {

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
    let gridSize = vh * .95;

    const gameField = document.querySelector("#game-field");

    const createGameGrid = function (gameField) {
        const grid = document.createElement("div");
        grid.className = "game-grid";
        grid.id = "my-grid";
        gameField.appendChild(grid);

        const gameGrid = document.querySelector(".game-grid");
        gameGrid.style.width = `${gridSize}px`;
        gameGrid.style.height = `${gridSize}px`;
        gameGrid.style.position = "relative";

        return gameGrid;
    };

    const removeGameGrid = function (gameField) {
        gameField.removeChild(gameField.children[0]);
    };

    let numSquares = 400;

    // console.log("gameGrid.clientHeight");
    // console.log(gameGrid.clientHeight);

    let promise = new Promise(function (resolve, reject) {
        console.log("promise begins!")
        return resolve(createGameGrid(gameField));
    });
    promise
        .then(function (whereAppend) {
            return createBoard(whereAppend, numSquares, gridSize);
        })
        .then(function (contentIDArray) {
            // console.info("contentIDArray");
            // console.info(contentIDArray);
            return contentBuilder(squareContentArray, contentIDArray, level_data, levelID);
        })
        .then(function (squareContentArray) {
            return getNewElems();
        })
        .then(function (toKeep) {
            removeGameGrid(gameField);
            return toKeep;
        })
        .then(function (toKeep) {
            let gameGrid = createGameGrid(gameField);
            return ({
                toKeep,
                gameGrid
            });
        })
        .then(function (obj) {
            let { toKeep, gameGrid } = obj;

            return seperateSquares(toKeep);
        })
        ///////////////////////////////////////////////////////////////////////// squareDivObj.soilArr ???
        .then(function (squareDivObj) {
            return sortAllSquares(squareDivObj);

            
            // let { grassArr, soilArr } = squareDivObj;
            // // return sortSquares(grassArr);

            // let sortedArray = grassArr.sort(function (a, b) {
            //     return a.id.localeCompare(b.id, undefined, {
            //         numeric: true,
            //         sensitivity: 'base'
            //     });
            // });
            // console.log(sortedArray);
            // ////////////////////////////////////////////
            // // let sortedArray = grassArr.id.sort(sortAlphaNum);
            // console.info("sortedArray: before");
            // console.info(sortedArray);

            // return sortedArray;
        })
        ////////////////////////////////////////////////////////////////////////////////////////////
        .then(function (sortedObjArr) { 
        // .then(function (sortedArray) {
            console.info("sortedArray: after");
            console.info(sortedObjArr);
            
            let newArrayHolder = [];
            // let newElemArray = [];
            
            newArrayHolder = sortedObjArr.map(compareSquares);
            // newArrayHolder.push(sortedObjArr.forEach(compareSquares));
            console.info("newArrayHolder?");
            console.info(newArrayHolder);
            
            // newElemArray.concat.apply([], newArrayHolder);
            // OR:
            let newElemArray = newArrayHolder.flat(1);
            
            console.info("newElemArray?");
            console.info(newElemArray);

            return newElemArray;

            // return compareSquares(sortedObjArr);
        })
        .then(function (newElemArray) {
            // let {toKeep, gameGrid} = obj;
            console.info("newElemArray:");
            console.info(newElemArray);

            return createLevelObj(newElemArray);
        })
        // need to roll this into the above function (draw) for enemies and avatar:
        .then(function (isDone) {
            let levelObj = {
                coords: {
                    left: 500,
                    top: 400,
                    width: 300,
                    height: 300,
                    right: this.left + this.width
                },
                elemType: "div",
                className: "transform-holder",
                class_moveType: "move-stand",
                id: "sprite-holder",
                imgUrl: "/images/lyric-stand.png"
            };
            return drawLevel("game-field", levelObj);
            // return drawLevel("my-grid", levelObj);
        })
        .then(function (newElem) {
            console.log("newElem");
            console.log(newElem);

            let obstacleObject = {
                ground_className: "square-soil",
                wall_className: "square-grass", // testing ONLY!
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