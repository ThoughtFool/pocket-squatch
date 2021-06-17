const getNewElems = function () {
    console.log("getNewElems function fires!")

    let levelCoordObject = {

        toKeep: [],
        toCreate: [],
        toRemove: [],
        getCoords: function () {
            for (let i = 0; i < this.toKeep.length; i++) {

                // newLevelElem:
                this.toCreate.push({
                    coords: this.toKeep[i].getBoundingClientRect(),
                    elemType: "div",
                    className: this.toKeep[i].children[0].classList[2],
                    class_moveType: "",
                    id: this.toKeep[i].id,
                    imgUrl: ""
                });
            };
            console.log(this.toCreate);
            return this.toCreate;
        },
        remove: function () {
            for (let i = 0; i < this.toRemove.length; i++) {
                this.toRemove[i].parentNode.removeChild(this.toRemove[i]);
            };
            return this.toRemove = [];
        }
    };
    /////////////////////////////////////////////////////////////////////////////
    let gridSquare = document.getElementsByClassName("grid-square");

    for (let i = 0; i < gridSquare.length; i++) {

        if (gridSquare[i].children[0].classList.contains("square-rock")) { // index: 0
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-wall")) { // index: 1
            // levelCoordObject.toKeep.push(gridSquare[i]);
            levelCoordObject.toRemove.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-lava")) { // index: 2
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-water")) { // index: 3
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-grass")) { // index: 4
            levelCoordObject.toKeep.push(gridSquare[i]);
            levelCoordObject.toRemove.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-soil")) { // index: 5
            levelCoordObject.toKeep.push(gridSquare[i]);
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-sky")) { // index: 6
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-night")) { // index: 7
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else {
            console.log("Error: dynamic-square-content does not contain any color squares.");
        };
    };
    // console.info(levelCoordObject);
    let toKeep = levelCoordObject.getCoords();
    levelCoordObject.remove();
    return toKeep;
    // return levelCoordObject.remove();
    // contentIDArray[i].getBoundingClientRect();
    // let allLevelElems_Coords = [];
};

module.exports = getNewElems;