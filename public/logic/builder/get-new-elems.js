const getNewElems = function () {
    let levelCoordObject = {

        toKeep: [],
        toCreate: [],
        toRemove: [],
        getCoords: function () {
            for (let i = 0; i < this.toKeep.length; i++) {
                // newLevelElem:
                this.toCreate.push({
                    id: this.toKeep[i].id,
                    className: this.toKeep[i].children[0].classList[2],
                    coords: this.toKeep[i].getBoundingClientRect()
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

        if (gridSquare[i].children[0].classList.contains("square-rock")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-wall")) {
            levelCoordObject.toKeep.push(gridSquare[i]);
            levelCoordObject.toRemove.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-lava")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-water")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-grass")) {
            levelCoordObject.toKeep.push(gridSquare[i]);
            levelCoordObject.toRemove.push(gridSquare[i]);

        } else if (gridSquare[i].children[0].classList.contains("square-soil")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-sky")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else if (gridSquare[i].children[0].classList.contains("square-night")) {
            levelCoordObject.toRemove.push(gridSquare[i]);
            // gridSquare[i].removeChild(gridSquare[i].children[0]);

        } else {
            console.log("Error: dynamic-square-content does not contain any color squares.");
        };
    };
    console.log(levelCoordObject);
    let toKeep = levelCoordObject.getCoords();
    levelCoordObject.remove();
    return toKeep;
    // return levelCoordObject.remove();
    // contentIDArray[i].getBoundingClientRect();
    // let allLevelElems_Coords = [];
};

module.exports = getNewElems;