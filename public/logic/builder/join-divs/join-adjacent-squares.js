// const sortSquares = require("../sort");

// // seperate the types of obstacles into arrays:
// let {
//     grassArr,
//     wallArr
// } = seperateSquares(squaresToJoinArray);

// sort each type of obstacle by their respective location in dom:
// let sortedArray = sortSquares(grassArr);


// let newElemArray;
// console.info(newElemArray = compareSquares(sortedArray, "square-grass"));



//////////////////////////////////////////////////////////////////

const swap = require("../swap");

const joinAdjacentSquares = function (squaresToJoinArray) {
    let beginningIndex = 0;
    let currentIndex = 1;
    //while the start of the unsorted portion doesnt not start at the after the end of the array
    while (currentIndex < squaresToJoinArray.length) {
        //while the currentIndex does not reach the end of the sorted section or the array (index of -1)
        while (currentIndex > 0) {
            //get currentValue(value to be sorted)
            currentVal = squaresToJoinArray[currentIndex].y;
            //if it is lesser than the last value, swap the two values, otherwise, break out of the loop
            if (currentVal <= squaresToJoinArray[currentIndex - 1].y) {
                swap(squaresToJoinArray, currentIndex, currentIndex - 1);
                currentIndex--;
            } else {
                break;
            }

        }
        //add 1 to beginningIndex to account for newly sorted section
        beginningIndex++;
        //start sorting from index after beginning
        currentIndex = beginningIndex + 1;

    }

    return squaresToJoinArray;
};

module.exports = joinAdjacentSquares;