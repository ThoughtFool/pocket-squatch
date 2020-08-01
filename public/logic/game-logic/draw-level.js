const drawLevel = function (gamescreenID, levelObj, idArray) {
    let {coords, elemType, className, class_moveType, id, imgUrl} = levelObj;
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
        // console.info("newDiv");
        // console.info(newDiv);
        return newDiv;
    };
    let gamescreen = document.getElementById(gamescreenID);
    
    let newElem = createElem(elemType, className, class_moveType, id);
    gamescreen.appendChild(newElem);
    let elemCreated = document.getElementById(`${id}`);
    // console.info("elemCreated");
    // console.info(elemCreated);
    
    elemCreated.style.position = "absolute";
    elemCreated.style.left = `${coords.left}px`;
    elemCreated.style.top = `${coords.top}px`;
    elemCreated.style.width = `${coords.width}px`;
    elemCreated.style.height = `${coords.height}px`;
    elemCreated.style.backgroundImage = `url("${imgUrl}")`;
    // elemCreated.style.backgroundSize = `${width}px ${height}px`;

    return ({
        idArray,
        id
    });
};

module.exports = drawLevel;