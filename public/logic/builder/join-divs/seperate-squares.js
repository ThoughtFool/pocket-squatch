// const compareSquares = require("./_compare-squares");

const seperateSquares = function (squaresToJoinArray) {

    let squareDivObj = {
        grassArr: [],
        soilArr: []
    };

    for (let i = 0; i < squaresToJoinArray.length; i++) {
        if (squaresToJoinArray[i].className === "square-grass") { // horizontal joins
            squareDivObj.grassArr.push(squaresToJoinArray[i]);
        } else if (squaresToJoinArray[i].className === "square-soil") { // verical joins
            squareDivObj.soilArr.push(squaresToJoinArray[i]);
        };
    };

    console.log("squareDivObj");
    console.log(squareDivObj);

    return squareDivObj;
    // return compareSquares(squareDivObj.grassArr, "square-grass");
};

module.exports = seperateSquares;