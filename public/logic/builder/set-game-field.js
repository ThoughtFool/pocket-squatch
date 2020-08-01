const createBoard = require("./create-board");
const level_data = require("../../data/level-data");
const contentBuilder = require("./content-builder");
const drawLevel = require("../game-logic/draw-level");
const getNewElems = require("./get-new-elems");
const joinAdjacentSquares = require("./sort");
const seperateSquares = require("./join-divs/seperate-squares");

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
            let {toKeep, gameGrid} = obj;
            
            return seperateSquares(toKeep);
            // joinAdjacentSquares(toKeep);
            //     // sort squares by x and y
            //     let newArr;
            //     for (let a = 0; a < squaresToJoinArray.length; a++) {
            //         for (let b = 0; b < squaresToJoinArray.length; b++) {

            //         if (squaresToJoinArray[a].right == squaresToJoinArray[b].left) {
            //             squaresToJoinArray[a] =

            //         }
            //         squaresToJoinArray[i].right == 
            //     }
            // }
        })
        .then(function (sortedArray) {
            // let {toKeep, gameGrid} = obj;
            console.info("sortedArray");
            console.info(sortedArray);
            
            const createLevelObj = function (sortedArray) {
                // let levelObj;
                let counter = 0;
                for (let i = 0; i < sortedArray.length; i++) {
                    let {coords, elemType, className, class_moveType, id, imgUrl} = sortedArray[i];
                    // let {id, className, coords} = sortedArray[i];
                    counter ++;

                    // levelObj = {
                    //     xPos: coords.x,
                    //     yPos: coords.y,
                    //     width: coords.width,
                    //     height: coords.height,
                    //     elemType: "div",
                    //     class_actorType: className,
                    //     class_moveType: "obstacle",
                    //     id: id,
                    //     // imgUrl: "/images/lyric-stand.png"
                    // };
                    // console.info(levelObj);
                    // drawLevel("my-grid", levelObj);
                    drawLevel("game-field", sortedArray[i]);
                };
                if (counter >= sortedArray.length) {
                    // console.info("counter");
                    // console.info(counter);

                    return isDone = "Done!";
                };
            };
            createLevelObj(sortedArray);
        })
        .then(function (isDone) {
            let levelObj = {
                coords: {
                    left: 500,
                    top: 400,
                    width: 300,
                    height: 300,
                    right: this.left + this.width
                },
                // xPos: 500,
                // yPos: 400,
                // width: 300,
                // height: 300,
                elemType: "div",
                className: "transform-holder",
                class_moveType: "move-stand",
                id: "sprite-holder",
                imgUrl: "/images/lyric-stand.png"
            };
            return drawLevel("game-field", levelObj);
            return drawLevel("my-grid", levelObj);
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