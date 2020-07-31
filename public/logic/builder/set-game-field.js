const createBoard = require("./create-board");
const level_data = require("../../data/level-data");
const contentBuilder = require("./content-builder");
const drawLevel = require("../game-logic/draw-level");
const getNewElems = require("./get-new-elems");

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
        // .then(function (obj) {
        //     let {toKeep, gameGrid} = obj;

        //     const joinAdjacentSquares = function (squaresToJoinArray) {
        //         // sort squares by x and y
        //         let newArr;
        //         for (let a = 0; a < squaresToJoinArray.length; a++) {
        //             for (let b = 0; b < squaresToJoinArray.length; b++) {

        //             if (squaresToJoinArray[a].right == squaresToJoinArray[b].left) {
        //                 squaresToJoinArray[a] =

        //             }
        //             squaresToJoinArray[i].right == 
        //         }
        //     }
        // })
        .then(function (obj) {
            let {toKeep, gameGrid} = obj;
            console.info("toKeep");
            console.info(toKeep);
            
            const createLevelObj = function (toKeep) {
                let levelObj;
                let counter = 0;
                for (let i = 0; i < toKeep.length; i++) {
                    let {id, className, coords} = toKeep[i];
                    counter ++;

                    levelObj = {
                        xPos: coords.x,
                        yPos: coords.y,
                        width: coords.width,
                        height: coords.height,
                        elemType: "div",
                        class_actorType: className,
                        class_moveType: "obstacle",
                        id: id,
                        // imgUrl: "/images/lyric-stand.png"
                    };
                    console.info(levelObj);
                    // drawLevel("my-grid", levelObj);
                    drawLevel("game-field", levelObj);
                };
                if (counter >= toKeep.length) {
                    // console.info("counter");
                    // console.info(counter);

                    return "Done!";
                };
            };
            createLevelObj(toKeep);
        })
        .then(function (isDone) {
            let levelObj = {
                xPos: 500,
                yPos: 400,
                width: 300,
                height: 300,
                elemType: "div",
                class_actorType: "transform-holder",
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