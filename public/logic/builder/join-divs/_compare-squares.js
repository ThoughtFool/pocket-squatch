const joinSquares = require("./join-squares");

const compareSquares = function (squaresToCompare, className) {
    // let newElemArray = [];
    // TEST ONLY: /////////////////////////////////////////
    let newElemArray_alt = [];

    // console.info("squaresToCompare");
    // console.info(squaresToCompare);

    for (let i = 0; i < squaresToCompare.length; i++) {
        // doesn't exceed length of array:
        let nextIndex = i + 1;
        let lastIndex = newElemArray_alt.length - 1;

        if (nextIndex < squaresToCompare.length) {

            if (newElemArray_alt.length < 1 || lastIndex < 0) {
                console.info("Path: A");
                // newElemArray_alt.push(squaresToCompare[i]);
                newElemArray_alt.push(joinSquares(false, squaresToCompare[i], null));

                console.info("squaresToCompare[i]");
                console.info(squaresToCompare[i]);

                // checks if already exists in new elem array:
            } else if (newElemArray_alt[lastIndex].coords.top === squaresToCompare[i].coords.top && // checks if on same row
                newElemArray_alt[lastIndex].coords.left + newElemArray_alt[lastIndex].coords.width === squaresToCompare[i].coords.left) { // checks if adjacent
                console.info("Path: B");
                let lastSquareHolder = newElemArray_alt[lastIndex];
                newElemArray_alt.pop();
                newElemArray_alt.push(joinSquares(true, lastSquareHolder, squaresToCompare[i]));
                // } else if (squaresToCompare[i].id == newElemArray[lastIndex].id) {

            } else {
                console.info("Path: C");
                // newElemArray_alt.push(squaresToCompare[i]);
                newElemArray_alt.push(joinSquares(false, squaresToCompare[i], null));
                console.info("newElemArray_alt (else)");
                console.info(newElemArray_alt);

            };
    } else {
        console.info("DONE!");
    };
    // 174.984375: x1004-y1012
    // 174.984375: x1004-y1013
};
console.info("newElemArray_alt");
console.info(newElemArray_alt);

return newElemArray_alt;
};

module.exports = compareSquares;