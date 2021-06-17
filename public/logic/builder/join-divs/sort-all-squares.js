const sortAllSquares = function (squareDivObj) {
    // let { grassArr, soilArr } = squareDivObj;
    let sortedObjArr = [];

    for (const squareTypeArr in squareDivObj) {
        let sortedArray = squareDivObj[squareTypeArr].sort(function (a, b) {
            return a.id.localeCompare(b.id, undefined, {
                numeric: true,
                sensitivity: 'base'
            });
        });
        sortedObjArr.push(sortedArray);
    };
    console.log(sortedObjArr);
    return sortedObjArr;
};

module.exports = sortAllSquares;