const joinSquares = require("./join-squares");

const compareSquares = function (squaresToCompare, className) {
    let newElemArray = [];

    console.info("squaresToCompare");
    console.info(squaresToCompare);

    for (let i = 0; i < squaresToCompare.length; i++) {
        // doesn't exceed length of array:
        let nextIndex = i + 1;
        let lastIndex = newElemArray.length - 1;
        if (nextIndex < squaresToCompare.length) {

            if (squaresToCompare[i].coords.top === squaresToCompare[nextIndex].coords.top && // checks if on same row
                squaresToCompare[i].coords.right === squaresToCompare[nextIndex].coords.left) { // checks if adjacent
                // squaresToCompare[i].coords.left + squaresToCompare[i].coords.width === squaresToCompare[nextIndex].coords.left) { // checks if adjacent

                console.info("squaresToCompare");
                console.info(squaresToCompare);
                console.info("newElemArray");
                console.info(newElemArray);

                // checks if already exists in new elem array:
                if (newElemArray.length < 1 || lastIndex < 0) {
                    console.info("A");
                    newElemArray.push(joinSquares(squaresToCompare[i], squaresToCompare[nextIndex]));

                } else if (newElemArray.length > 0 && squaresToCompare[i].id == newElemArray[lastIndex].id) {
                    console.info("B");
                    let lastSquareHolder = newElemArray[lastIndex];
                    newElemArray.pop;
                    newElemArray.push(joinSquares(lastSquareHolder, squaresToCompare[nextIndex]));

                } else {
                    console.info("C");
                    newElemArray.push(joinSquares(squaresToCompare[i], squaresToCompare[nextIndex]));

                };
            } else {
                newElemArray.push(squaresToCompare[i]);
            };
        } else {
            console.info("DONE!");
        };
    };
    console.info("newElemArray");
    console.info(newElemArray);

    return newElemArray;
};

module.exports = compareSquares;