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
const moveAndDisplay = require("../sprite-logic/move-and-display/move-and-display");

const setGameField = function (levelID, cb) {

    const gamescreen = document.getElementById("game-screen");
    const gamescreen_coords = gamescreen.getBoundingClientRect();

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
    let gridSize = gamescreen_coords.height;
    // let gridSize = vh;

    let gridClassName = "game-grid";
    let gridID = "my-grid";

    // let gridSize = {
    //     vw: vw * .80,
    //     vh: vh,
    // };

    // ===============================================

    // create sun:
    const solarBodyHolder = document.createElement("div");
    solarBodyHolder.className = "solar-holder";
    gamescreen.appendChild(solarBodyHolder);

    const solarHolderElem = document.querySelector(".solar-holder");
    solarHolderElem.style.width = `${gridSize * .15}px`;
    solarHolderElem.style.height = `${gridSize * .15}px`;

    solarHolderElem.style.position = "absolute";
    solarHolderElem.style.left = "10%";
    solarHolderElem.style.display = "block";

    const solarBody = document.createElement("div");

    solarBody.className = "sunny";
    solarBody.id = "apollo";
    solarHolderElem.appendChild(solarBody);

    const solarBodyElem = document.querySelector(`#apollo`);
    solarBodyElem.style.width = "100%";
    solarBodyElem.style.height = "100%";

    solarBodyElem.style.position = "relative";
    // solarBodyElem.style.left = "10%";
    solarBodyElem.style.display = "block";

    const solarSpan = document.createElement("span");
    solarBodyElem.appendChild(solarSpan);

    // ===============================================

    const gameField = document.querySelector("#game-field");

    const createGameGrid = function (gameField, gridClassName, gridID, gridSize) {
        const grid = document.createElement("div");
        grid.className = gridClassName;
        // grid.className = "game-grid";
        grid.id = gridID;
        // grid.id = "my-grid";
        gameField.appendChild(grid);

        console.info("gamescreen");
        console.info(gamescreen);

        gamescreen.style.backgroundImage = `url("")`;
        gamescreen.classList.add("solar-cycle");

        const gameGrid = document.querySelector(`#${gridID}`);
        // gameGrid.style.width = `${gridSize}px`;
        // gameGrid.style.height = `${gridSize}px`;
        gameGrid.style.width = `100%`;
        gameGrid.style.height = `100%`;

        // gameGrid.style.background.size = "cover";
        // gameGrid.style.background.image = `url("./images/blue-valley.PNG")`;
        // gameGrid.style.background.repeat = "no-repeat";

        // gameGrid.style.width = `100%`;
        // gameGrid.style.height = `100%`;
        // gameGrid.style.position = "relative";

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
        return resolve(createGameGrid(gameField, gridClassName, gridID, gridSize));
    });
    promise
        .then(function (whereAppend) {
            // console.info("whereAppend.getBoundingClientRect()");
            // console.info(whereAppend.getBoundingClientRect());

            return createBoard(whereAppend, numSquares, gridSize);
        })
        .then(function (contentIDArray) {
            // console.info("contentIDArray");
            // console.info(contentIDArray);
            level_data.contentIDArray = contentIDArray;
            return contentBuilder(squareContentArray, level_data.contentIDArray, level_data, levelID);
        })
        .then(function (squareContentArray) {
            console.info("In promise: before getNewElems()");
            return getNewElems();
        })
        .then(function (toKeep) {
            removeGameGrid(gameField);
            return toKeep;
        })
        .then(function (toKeep) {
            let gameGrid = createGameGrid(gameField, gridClassName, gridID, gridSize);
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
            // console.info("sortedArray: after");
            // console.info(sortedObjArr);

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

        //////////////////////////////////////////////// moved from line 70?
        // .then(function (toKeep) {
        //     let gameGrid = createGameGrid(gameField);
        //     return ({
        //         toKeep,
        //         gameGrid
        //     });
        // })
        //////////////////////////////////////////////// moved from line 70?

        .then(function (newElemArray) {
            // let {toKeep, gameGrid} = obj;
            console.info("newElemArray:");
            console.info(newElemArray);

            return createLevelObj(newElemArray); // returns "Done!"
        })
        // need to roll this into the above function (draw) for enemies and avatar:
        .then(function (isDone) {
            const grid = document.querySelector(`#${gridID}`);

            let gridDimensions = grid.getBoundingClientRect();
            let levelObj = {
                coords: {
                    width: moveAndDisplay.relativeGridResizeFunc("sasquatch"),
                    height: moveAndDisplay.relativeGridResizeFunc("sasquatch"),

                    left: gridDimensions.width / 2 - this.width,
                    // left: gridDimensions.left,
                    top: gridDimensions.height / 2 - this.width,
                    // top: gridDimensions.top,
                    right: this.left + this.width
                },
                elemType: "div",
                className: "transform-holder",
                class_moveType: "move-stand",
                id: "sprite-holder",
                imgUrl: "/images/discovery.png"
            };
            // return drawLevel("game-field", levelObj);
            return drawLevel("my-grid", levelObj, null, true);
        })
        .then(function (newElemResult) {
            console.info("newElemResult");
            console.info(newElemResult);

            let obstacleObject = {
                ground_className: "square-soil",
                wall_className: "square-grass", // testing ONLY!
                enemy_className: "enemy",
                powerup_className: "powerup",
                // obstacle_className: "obstacle",
            };
            return cb(obstacleObject, newElemResult.id);
        });

    // contentIDArray = createBoard(whereAppend, numSquares, gridSize);
    // console.info("contentIDArray");
    // console.info(contentIDArray);

    // contentBuilder(squareContentArray, contentIDArray, level_data, levelID);

    // return cb();
};

module.exports = setGameField;