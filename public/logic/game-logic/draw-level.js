const drawLevel = function (gamescreenID, levelObj, idArray) {
    let {xPos, yPos, width, height, elemType, class_actorType, class_moveType, id, imgUrl} = levelObj;
    
    const createElem = function (elemType, class_actorType, class_moveType, id) {
        let newDiv = document.createElement(`${elemType}`);
        if (class_actorType) {
            newDiv.classList.add(`${class_actorType}`);
        };

        if (class_moveType) {
            newDiv.classList.add(`${class_moveType}`);
        };
        
        if (id) {
            newDiv.id = (`${id}`);
        };
        console.info("newDiv");
        console.info(newDiv);
        return newDiv;
    };
    let gamescreen = document.getElementById(gamescreenID);
    
    let newElem = createElem(elemType, class_actorType, class_moveType, id);
    gamescreen.appendChild(newElem);
    let elemCreated = document.getElementById(`${id}`);
    console.info("elemCreated");
    console.info(elemCreated);
    
    elemCreated.style.position = "absolute";
    elemCreated.style.left = `${xPos}px`;
    elemCreated.style.top = `${yPos}px`;
    elemCreated.style.width = `${width}px`;
    elemCreated.style.height = `${height}px`;
    elemCreated.style.backgroundImage = `url("${imgUrl}")`;
    // elemCreated.style.backgroundSize = `${width}px ${height}px`;

    return ({
        idArray,
        id
    });
};

module.exports = drawLevel;