const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
// let gridSize = Math.floor(vh * .75);
let gridSize = vh * .75;

const gameField = document.querySelector("#game-field");
const grid = document.createElement("div");
grid.className = "game-grid";
gameField.appendChild(grid);

const gameGrid = document.querySelector(".game-grid");
gameGrid.style.width = `${gridSize}px`;
gameGrid.style.height = `${gridSize}px`;

let whereAppend = gameGrid;
// let numSquares = 100;
let numSquares = 625;

console.log("gameGrid.innerHeight");
console.log(gameGrid.clientHeight);
// gridSize = gameGrid.clientWidth * .99;

const createSquareType = function (squareID, squareType) {};

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

                // divide the size of squares evenly:
                // let percentageSize = Math.floor(1 / sqRootNum * 100);
                let pixelSize = gridSize / sqRootNum;
                // let pixelSize = Math.floor(gridSize / sqRootNum);
                // console.log(pixelSize);
                // console.log(percentageSize);
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
            };
        };

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



let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];
let levelsObject = {
    001: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
        1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
        1, 6, 6, 6, 4, 6, 2, 2, 2, 1,
        1, 6, 6, 6, 4, 6, 2, 2, 2, 1,
        1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
        1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
        1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
        1, 6, 6, 6, 4, 4, 4, 5, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    002: [
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
    myLevels: [],
    loop: function (level, counter) {
        // console.log(this[level][counter]);
        return this[level][counter];
    },
    saveNew: function (savedLevelArray) {
        let timeStamp = Date.now();
        this.myLevels.push({
            [timeStamp]: savedLevelArray
        });
        
        console.log(this);
        return this;
    }
};
        let timeStamp = Date.now();
        console.log("timeStamp");
        console.log(timeStamp);


const contentBuilder = function (squareContentArray, contentIDArray, levelsObject) {
    for (let i = 0; i < contentIDArray.length; i++) {
        console.log(contentIDArray[i]);
        let randomClass = Math.floor(Math.random() * 8);
        let contentSpace = document.getElementById(`${contentIDArray[i]}`);
        let levelClass = levelsObject.loop(002, i);
        // let levelClass = levelsObject.loop(001, i);
        contentSpace.classList.add(squareContentArray[levelClass]);
        // contentSpace.classList.add(squareContentArray[randomClass]);
    };
};

// saveLevel:
const saveLevel = function () {
    let savedLevelArray = [];
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

        console.log(contentIDArray[i]);
        let randomClass = Math.floor(Math.random() * 8);
        let contentSpace = document.getElementById(`${contentIDArray[i]}`);
        let levelClass = levelsObject.loop(002, i);
        // let levelClass = levelsObject.loop(001, i);
        contentSpace.classList.add(squareContentArray[levelClass]);
        // contentSpace.classList.add(squareContentArray[randomClass]);
    };
    // console.log(savedLevelArray);
    return levelsObject.saveNew(savedLevelArray);
};

contentBuilder(squareContentArray, contentIDArray, levelsObject);

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
    console.log(event.target.id);
    contentToColor = document.getElementById(event.target.id);

    if (event.buttons == 1 || event.buttons == 3) {

    // TODO: create loop to remove classes if contains:
    contentToColor.classList.remove("square-rock");
    contentToColor.classList.remove("square-wall");
    contentToColor.classList.remove("square-lava");
    contentToColor.classList.remove("square-water");
    contentToColor.classList.remove("square-grass");
    contentToColor.classList.remove("square-soil");
    contentToColor.classList.remove("square-sky");
    contentToColor.classList.remove("square-night");
    
    let squareColor;
    if (darkGrayBrush.classList.contains("in-use")) {
        squareColor = "square-rock";
    } else if (purpleBrush.classList.contains("in-use")) {
        squareColor = "square-wall";
    } else if (redBrush.classList.contains("in-use")) {
        squareColor = "square-lava";
    } else if (blueBrush.classList.contains("in-use")) {
        squareColor = "square-water";
    } else if (greenBrush.classList.contains("in-use")) {
        squareColor = "square-grass";
    } else if (brownBrush.classList.contains("in-use")) {
        squareColor = "square-soil";
    } else if (lightBlueBrush.classList.contains("in-use")) {
        squareColor = "square-sky";
    } else if (blackBrush.classList.contains("in-use")) {
        squareColor = "square-night";
    } else {
        blackBrush.classList.add("in-use"); // adding a default brush assignment and color to square
        squareColor = "square-night";
        alert ("No brush has been selected. Please select a brush to begin.");
    };
    contentToColor.classList.add(squareColor);
    };
};

const createLevel = function () {

    const dynaSquareContent = document.getElementsByClassName("dyna-square-content");
    for (let i = 0; i < dynaSquareContent.length; i++) {
        let dynaSquare = dynaSquareContent[i];
        dynaSquare.addEventListener("mousedown", colorChange, true);
        dynaSquare.addEventListener('mouseover', colorChange, true);

        dynaSquare.onclick = function () {
            // TODO: need to being able to save to file and pass to function. Also, create a preview to user before loading.
            console.log("Enjoy making your own levels. Then remember to save your file.");
        }
    }
};

