
const drawLevel = function (gridID, levelObj, idArray, isSprite) {
    let { coords, elemType, className, class_moveType, id, imgUrl } = levelObj;
    // const getImgSize = require("../builder/get-img-size");
    // let {xPos, yPos, width, height, elemType, className, class_moveType, id, imgUrl} = levelObj;

    const createElem = function (elemType, className, class_moveType, id) {
        let newDiv = document.createElement(`${elemType}`);
        if (className) {
            newDiv.classList.add(`${className}`);
        };

        if (class_moveType) {
            newDiv.classList.add(`${class_moveType}`);
        };

        if (id) {
            newDiv.id = (`${id}`);
        };
        // console.log("newDiv");
        // console.log(newDiv);
        return newDiv;
    };
    let gameGrid = document.getElementById(gridID);

    let newElem = createElem(elemType, className, class_moveType, id);
    gameGrid.appendChild(newElem);
    let elemCreated = document.getElementById(`${id}`);

    elemCreated.style.position = "absolute";
    elemCreated.style.left = `${coords.left}px`;
    elemCreated.style.top = `${coords.top}px`;
    elemCreated.style.width = `${coords.width}px`;
    elemCreated.style.height = `${coords.height}px`;
    // elemCreated.style.height = (typeof coords.height != "number") ? "auto" : `${coords.height}px`;
    elemCreated.style.backgroundImage = `url("${imgUrl}")`;
    // elemCreated.style.backgroundSize = "contain";
    // let imgSize = (typeof elemCreated.style.backgroundImage != "undefined") ? elemCreated.style.backgroundSize : 100;
    // console.log("imgSize");
    // console.log(imgSize);
    // if (isSprite) {
    //     let img_coords = getImgSize(imgUrl);
    //     console.log("img_coords");
    //     console.log(img_coords);
    //     elemCreated.style.backgroundSize = `${300 * .20}px ${300 * .20}px`;
    // };


    return ({
        idArray,
        id
    });
};

module.exports = drawLevel;