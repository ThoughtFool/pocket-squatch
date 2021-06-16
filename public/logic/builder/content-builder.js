const contentBuilder = function (squareContentArray, contentIDArray, levelsObject, levelID = "60c9690e91e2ddf727f4ba7e") {
    // console.log("contentIDArray in contentBuilder");
    // console.log(contentIDArray);

    for (let i = 0; i < contentIDArray.length; i++) {
        // let randomClass = Math.floor(Math.random() * 8);
        let contentSpace = document.getElementById(`${contentIDArray[i]}`);
        let levelClass = levelsObject.loop(levelID, i);
        contentSpace.classList.remove(contentSpace.classList[2]);
        contentSpace.classList.add(squareContentArray[levelClass]);
    };
    return squareContentArray;
};

module.exports = contentBuilder;