const joinSquares = require("./join-squares");

const compareSquares = function (squaresToCompare, className) {
    let newElemArray;

    console.info("squaresToCompare");
    console.info(squaresToCompare);

    for (let i = 0; i < squaresToCompare.length; i++) {
        // doesn't exceed length of array:
        if (i + 1 <= squaresToCompare.length) {

            if (squaresToCompare[i].coords.top === squaresToCompare[i + 1].coords.top && // checks if on same row
                squaresToCompare[i].coords.left + squaresToCompare[i].coords.width === squaresToCompare[i].coords.left) { // checks if adjacent

                newElemArray.push(joinSquares(squaresToCompare[i], squaresToCompare[i + 1], className));
            };

        } else {
            console.info("DONE!");
        };
    };
    console.info(newElemArray);

    return newElemArray;
};

module.exports = compareSquares;