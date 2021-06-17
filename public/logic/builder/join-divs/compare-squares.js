const joinSquares = require("./join-squares");

const compareSquares = function (squaresToCompare) {
    let newElemArray = [];

    console.log("squaresToCompare");
    console.log(squaresToCompare);

    for (let i = 0; i < squaresToCompare.length; i++) {
        // doesn't exceed length of array:
        let nextIndex = i + 1;
        let lastIndex = newElemArray.length - 1;
        if (nextIndex < squaresToCompare.length) {

            if (squaresToCompare[i].coords.top === squaresToCompare[nextIndex].coords.top && // checks if on same row
                // squaresToCompare[i].coords.right === squaresToCompare[nextIndex].coords.left) { // checks if adjacent
                squaresToCompare[i].coords.left + squaresToCompare[i].coords.width === squaresToCompare[nextIndex].coords.left) { // checks if adjacent

                console.log("squaresToCompare");
                console.log(squaresToCompare);
                console.log("newElemArray...");
                console.log(newElemArray);

                // checks if already exists in new elem array:
                if (newElemArray.length < 1 || lastIndex < 0) {
                    console.log("Path: A...");
                    newElemArray.push(joinSquares(false, squaresToCompare[i], squaresToCompare[nextIndex]));

                } else if (squaresToCompare[i].id == newElemArray[lastIndex].id) {
                    console.log("Path: B...");
                    let lastSquareHolder = newElemArray[lastIndex];
                    newElemArray.pop;
                    newElemArray.push(joinSquares(true, lastSquareHolder, squaresToCompare[nextIndex]));

                } else {
                    console.log("Path: C...");
                    let lastSquareHolder = squaresToCompare[i];
                    newElemArray.pop;
                    newElemArray.push(joinSquares(false, lastSquareHolder, squaresToCompare[nextIndex]));

                };
            } else {
                console.log("else:");
                console.log(squaresToCompare[i]);

                newElemArray.push(squaresToCompare[i]);
            };
        } else {
            console.log("DONE!");
        };
    };
    console.log("newElemArray");
    console.log(newElemArray);

    return newElemArray;
};

module.exports = compareSquares;