const joinSquares = require("./join-squares");

const compareSquares = function (squaresToCompare, className) {
    // let newElemArray = [];
    // TEST ONLY: /////////////////////////////////////////
    let newElemArray_alt = [];

    // console.log("squaresToCompare");
    // console.log(squaresToCompare);

    for (let i = 0; i < squaresToCompare.length; i++) {
        // doesn't exceed length of array:
        let nextIndex = i + 1;
        let lastIndex = newElemArray_alt.length - 1;

        if (nextIndex < squaresToCompare.length) {

            if (newElemArray_alt.length < 1 || lastIndex < 0) {
                console.log("Path: A");
                // newElemArray_alt.push(squaresToCompare[i]);
                newElemArray_alt.push(joinSquares(false, squaresToCompare[i], null));

                console.log("squaresToCompare[i]");
                console.log(squaresToCompare[i]);

                // checks if already exists in new elem array:
            } else if (newElemArray_alt[lastIndex].coords.top === squaresToCompare[i].coords.top && // checks if on same row
                newElemArray_alt[lastIndex].coords.left + newElemArray_alt[lastIndex].coords.width === squaresToCompare[i].coords.left) { // checks if adjacent
                console.log("Path: B");
                let lastSquareHolder = newElemArray_alt[lastIndex];
                newElemArray_alt.pop();
                newElemArray_alt.push(joinSquares(true, lastSquareHolder, squaresToCompare[i]));
                // } else if (squaresToCompare[i].id == newElemArray[lastIndex].id) {

            } else {
                console.log("Path: C");
                // newElemArray_alt.push(squaresToCompare[i]);
                newElemArray_alt.push(joinSquares(false, squaresToCompare[i], null));
                console.log("newElemArray_alt (else)");
                console.log(newElemArray_alt);

            };
        } else {
            console.log("DONE!");
        };
        // 174.984375: x1004-y1012
        // 174.984375: x1004-y1013
    };
    console.log("newElemArray_alt");
    console.log(newElemArray_alt);

    return newElemArray_alt;
};

module.exports = compareSquares;