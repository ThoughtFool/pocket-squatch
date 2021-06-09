const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
// let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "ground", "square-soil", "square-sky", "square-night"];
let gridSize = vh * .75;
const parentElems_coords = [];

const gameField = document.querySelector("#game-field");
const grid = document.createElement("div");
grid.className = "game-grid";
gameField.appendChild(grid);

const gameGrid = document.querySelector(".game-grid");
gameGrid.style.width = `${gridSize}px`;
gameGrid.style.height = `${gridSize}px`;

let whereAppend = gameGrid;
// let numSquares = 100;
let numSquares = 400;
// let numSquares = 625;

console.log("gameGrid.clientHeight");
console.log(gameGrid.clientHeight);
// gridSize = gameGrid.clientWidth * .99;

const createSquareType = function (squareID, squareType) { };

const isSquare = function (num) {
    return num > 4 && Math.sqrt(num) % 1 === 0;
};

const MakeSquare = function Square(x, y, goldilocks) {
    this.x = x;
    this.y = y;
    this.goldilocks = goldilocks;
};

const createBoard = function (whereAppend, numSquares, gridSize) {
    let contentIDArray = [];

    if (isSquare(numSquares)) {
        console.log("numSquares is square");
        let gameBoard = [];
        baseNum = 1000;
        console.log("square root of " + numSquares);
        sqRootNum = Math.sqrt(numSquares);
        console.log(sqRootNum);

        // create constructor object:
        for (let i = 1; i <= sqRootNum; i++) {
            // create a row (# based on sqRootNum), then append new divs (# based on sqRootNum):

            // create rows:
            newRow = document.createElement("div");
            rowID = `row-${i}`;
            newRow.setAttribute("id", rowID);
            whereAppend.appendChild(newRow);
            boardRow = document.getElementById(rowID);
            boardRow.setAttribute("class", "row");
            // newRow.setAttribute("class", "row").setAttribute("id", rowID);
            // TODO: reduce line below by adding setAttribute on same line as above?

            for (let j = 1; j <= sqRootNum; j++) {
                let square = new MakeSquare(baseNum + j, baseNum + i, Math.floor(Math.random() * 10) + 1);
                gameBoard.push(square);

                // create divs in rows:
                squareDiv = document.createElement("div");
                squareId = `x${baseNum + j}-y${baseNum + i}`;
                squareDiv.setAttribute("id", squareId);
                boardRow.appendChild(squareDiv);
                newSquare = document.getElementById(squareId);
                newSquare.classList.add("grid-square");
                //////////////////////////////////////////////////////////////////////////////

                //////////////////////////////////////////////////////////////////////////////

                // divide the size of squares evenly:
                // let percentageSize = Math.floor(1 / sqRootNum * 100);
                let pixelSize = gridSize / sqRootNum;
                newSquare.style.width = `${pixelSize}px`;
                newSquare.style.height = `${pixelSize}px`;

                /////////////////////////////////////////////
                contentInSquareDiv = document.createElement("div");
                contentId = `content-${squareId}`;
                contentInSquareDiv.setAttribute("id", contentId);
                newSquare.appendChild(contentInSquareDiv);
                newContentSquare = document.getElementById(contentId);
                newContentSquare.classList.add("dyna-square-content");
                newContentSquare.classList.add("empty-space");
                contentIDArray.push(contentId);

                //////////////////////////////////////////////////////////////////////////////
                parentElems_coords.push(squareId);
                // parentElems_coords.push(newSquare.getBoundingClientRect());

                //////////////////////////////////////////////////////////////////////////////
            };
        };

        console.log("parentElems_coords");
        console.log(parentElems_coords);

        return contentIDArray;

    } else {
        if (numSquares < 9) {
            console.log("numSquares is NOT >= 9");
        } else {
            console.log("numSquares is NOT square");
        };
    };
};

contentIDArray = createBoard(whereAppend, numSquares, gridSize);
console.log(contentIDArray);

const addStampToList = function () {
    let timeStamp = Date.now();
    const selector = document.getElementById("time-stamp-id");
    let option = document.createElement("option");
    option.text = timeStamp;
    selector.add(option, selector[0]);
    return timeStamp;
};

let levelData = {

    data: {
        001: {
            blueprint: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 4, 6, 4, 2, 2, 1,
                1, 6, 6, 6, 4, 6, 2, 2, 2, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
                1, 6, 6, 6, 4, 4, 4, 5, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            name: "Too Little",
            enemy: {},
            enemyTot: 4,
            gravity: 0.2, // gravity per frame
            drag: 0.999,
            groundDrag: 0.9, // ground movement
            ground: 150
        },

        002: {
            blueprint: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 4, 5, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 2, 5, 4, 5, 0, 5, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 2, 2, 4, 5, 5, 0, 0, 0, 1,
                1, 6, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 4, 6, 2, 2, 2, 0, 5, 5, 0, 5, 1,
                1, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 2, 2, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 2, 5, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 4, 5, 4, 5, 5, 5, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 4, 4, 4, 4, 4, 5, 5, 0, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 2, 2, 4, 5, 0, 0, 0, 0, 1,
                1, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 2, 4, 4, 0, 0, 5, 0, 5, 1,
                1, 6, 6, 4, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 0, 0, 5, 5, 0, 0, 1,
                1, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 4, 0, 0, 5, 0, 5, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 0, 0, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 6, 0, 4, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 4, 4, 4, 0, 5, 5, 0, 0, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 5, 5, 0, 0, 5, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 4, 2, 4, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 2, 2, 5, 5, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 0, 5, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 4, 6, 6, 6, 6, 6, 2, 2, 2, 4, 2, 2, 2, 0, 5, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 4, 4, 2, 4, 5, 5, 0, 0, 0, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 4, 4, 4, 0, 5, 5, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 4, 4, 5, 4, 5, 5, 5, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            name: "Too Big",
            enemy: {},
            enemyTot: 4,
            gravity: 0.2, // gravity per frame
            drag: 0.999,
            groundDrag: 0.9, // ground movement
            ground: 150
        },
        003: {
            blueprint: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 4, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 2, 2, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 2, 2, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 4, 6, 2, 2, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 2, 4, 1,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 4, 1,
                1, 1, 1, 1, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            name: "Blue Valley Mountains",
            enemy: {},
            enemyTot: 4,
            gravity: 0.2, // gravity per frame
            drag: 0.999,
            groundDrag: 0.9, // ground movement
            ground: 150
        }
    },

    loop: function (level, counter) {
        return this.data[level].blueprint[counter];
    },
    saveNew: function (savedLevelArray, newLevelName) {
        let timeStamp = addStampToList();
        // console.log("timeStamp");
        // console.log(timeStamp);
        this.data[timeStamp] = {
            blueprint: savedLevelArray,
            name: newLevelName,
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        };
        console.log(this);
        return this;
    }
};

let levelID = 003;
const contentBuilder = function (squareContentArray, contentIDArray, levelData, levelID) {
    for (let i = 0; i < contentIDArray.length; i++) {
        // let randomClass = Math.floor(Math.random() * 8);
        let contentSpace = document.getElementById(`${contentIDArray[i]}`);
        let levelClass = levelData.loop(levelID, i);
        contentSpace.classList.remove(contentSpace.classList[2]);
        contentSpace.classList.add(squareContentArray[levelClass]);
    };
};

// saveLevel:
const saveLevel = function () {
    let savedLevelArray = [];
    // let dynaSquareContent = document.querySelectorAll(".dyna-square-content");
    let newLevelName = document.querySelector("#coolName").value;

    console.log("newLevelName");
    console.log(newLevelName);

    let dynaSquareContent = document.getElementsByClassName("dyna-square-content");

    for (let i = 0; i < dynaSquareContent.length; i++) {

        if (dynaSquareContent[i].classList.contains("square-rock")) {
            savedLevelArray.push(0);

        } else if (dynaSquareContent[i].classList.contains("square-wall")) {
            savedLevelArray.push(1);

        } else if (dynaSquareContent[i].classList.contains("square-lava")) {
            savedLevelArray.push(2);

        } else if (dynaSquareContent[i].classList.contains("square-water")) {
            savedLevelArray.push(3);

        } else if (dynaSquareContent[i].classList.contains("square-grass")) {
            savedLevelArray.push(4);

        } else if (dynaSquareContent[i].classList.contains("square-soil")) {
            savedLevelArray.push(5);

        } else if (dynaSquareContent[i].classList.contains("square-sky")) {
            savedLevelArray.push(6);

        } else if (dynaSquareContent[i].classList.contains("square-night")) {
            savedLevelArray.push(7);

        } else {
            console.log("Error: dynamic-square-content does not contain any color squares.");
        };
    };

    // {
    //     {
    // blueprint: [],
    //             name: "insert cool name here",
    //                 enemy: { },
    //         enemyTot: 5,
    //             gravity: 0.2,
    //                 drag: 0.999,
    //                     groundDrag: 0.9,
    //                         ground: 150 --
    //     }
    // }
    return levelData.saveNew(savedLevelArray, newLevelName);
};

contentBuilder(squareContentArray, contentIDArray, levelData, levelID);

const darkGrayBrush = document.getElementById("dark-gray-brush");
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

const colorChange = function (event) {

    if (event.buttons == 1 || event.buttons == 3) {
        let contentToColor;
        contentToColor = document.getElementById(event.target.id);

        // TODO: create loop to remove classes if contains:
        // contentToColor.classList.remove(contentToColor.classList[2]);
        //     "square-rock",
        //     "square-wall",
        //     "square-lava",
        //     "square-water",
        //     "square-grass",
        //     "square-soil",
        //     "square-sky",
        //     "square-night"
        //     );

        if (darkGrayBrush.classList.contains("in-use")) {
            let squareColor = "square-rock";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (purpleBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-wall";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);
            // contentToColor.classList.replace(oldToken, newToken);

        } else if (redBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-lava";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);

        } else if (blueBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-water";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);

        } else if (greenBrush.classList.contains("in-use")) {
            let squareColor = "square-grass";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (brownBrush.classList.contains("in-use")) {
            let squareColor = "square-soil";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (lightBlueBrush.classList.contains("in-use")) {
            let squareColor = "square-sky";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (blackBrush.classList.contains("in-use")) {
            let squareColor = "square-night";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else {
            blackBrush.classList.remove(contentToColor.classList[2]).add("in-use"); // adding a default brush assignment and color to square
            let squareColor = "square-night";
            alert("No brush has been selected. Please select a brush to begin.");
            contentToColor.classList.add(squareColor);

        };
    };
};

const createLevel = function () {

    const dynaSquareContent = document.querySelectorAll(".dyna-square-content");
    // const dynaSquareContent = document.getElementsByClassName("dyna-square-content");
    for (let i = 0; i < dynaSquareContent.length; i++) {
        let dynaSquare = dynaSquareContent[i];
        let dynaSquareID = document.getElementById(dynaSquare.id);
        dynaSquare.addEventListener("mousedown", colorChange);
        dynaSquareID.addEventListener("mouseover", colorChange);
    };
};

const loadMyLevel = function () {
    let timeID = JSON.parse(document.getElementById("time-stamp-id").value);
    // TODO: append ids so that user can access (create a drop-down) / this can also be use for history (undo/redo)
    console.log(timeID);
    return contentBuilder(squareContentArray, contentIDArray, levelData, timeID);
};

const getNewElems = function () {
    let levelCoordObject = {

        toKeep: [],
        toCreate: [],
        toRemove: [],
        getCoords: function () {
            for (let i = 0; i < this.toKeep.length; i++) {
                // newLevelElem:
                this.toCreate.push({
                    id: this.toKeep[i].id,
                    className: this.toKeep[i].children[0].classList[2],
                    coords: this.toKeep[i].getBoundingClientRect()
                });
            };
            return console.log(this.toCreate);
        },
        remove: function () {
            for (let i = 0; i < this.toRemove.length; i++) {
                this.toRemove[i].parentNode.removeChild(this.toRemove[i]);
            };
            return this.toRemove = [];
        }
    };
    /////////////////////////////////////////////////////////////////////////////
    let gridSquare = document.getElementsByClassName("grid-square");

    for (let i = 0; i < gridSquare.length; i++) {

        if (gridSquare[i].children[0].classList.contains("square-rock")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-wall")) {
            levelCoordObject.toKeep.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-lava")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-water")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-grass")) {
            levelCoordObject.toKeep.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-soil")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-sky")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-night")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else {
            console.log("Error: dynamic-square-content does not contain any color squares.");
        };
    };
    return levelCoordObject.getCoords();
    return levelCoordObject.remove();
    // contentIDArray[i].getBoundingClientRect();
    // let allLevelElems_Coords = [];
    return console.log(levelCoordObject);

};