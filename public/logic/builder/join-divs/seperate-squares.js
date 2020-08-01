const compareSquares = require("./compare-squares");

const seperateSquares = function (squaresToJoinArray) {

    let squareDivObj = {
        grassArr: [],
        wallArr: []
    };

    for (let i = 0; i < squaresToJoinArray.length; i++) {
        if (squaresToJoinArray[i].className === "square-grass") { // horizontal joins
            squareDivObj.grassArr.push(squaresToJoinArray[i]);
        } else if (squaresToJoinArray[i].className === "square-wall") { // verical joins
            squareDivObj.wallArr.push(squaresToJoinArray[i]);
        };
    };

    // squareDivObj;
    return compareSquares(squareDivObj.grassArr, "square-grass")
};

module.exports = seperateSquares;