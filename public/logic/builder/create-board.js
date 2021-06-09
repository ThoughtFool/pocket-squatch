const MakeSquare = require("./make-square");
const isSquare = require("./is-square");

// gridSize can dynamically assigned but will need to match saved levelboards:
const createBoard = function (whereAppend, numSquares, gridSize) {
    const parentElems_coords = [];
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

module.exports = createBoard;