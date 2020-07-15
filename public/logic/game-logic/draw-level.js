const drawLevel = function (gamescreenID, levelObj) {
    let {xPos, yPos, width, height, elemType, class_actorType, class_moveType, id, imgUrl} = levelObj;

    const createElem = function (elemType, class_actorType, class_moveType, id) {
        let newElem = document.createElement(`${elemType}`);
        if (class_actorType) {
            newElem.classList.add(`${class_actorType}`);
        };

        if (class_moveType) {
            newElem.classList.add(`${class_moveType}`);
        };

        if (id) {
            newElem.id = (`${id}`);
        };
        return newElem;
    };

    let gamescreen = document.getElementById(gamescreenID);
    let newElem = createElem(elemType, class_actorType, class_moveType, id);
    newElem.style.position = "absolute";
    newElem.style.left = `${xPos}px`;
    newElem.style.top = `${yPos}px`;
    newElem.style.width = `${width}px`;
    newElem.style.height = `${height}px`;
    newElem.style.backgroundImage = `url("${imgUrl}")`;
    newElem.style.backgroundSize = `${width}px ${height}px`;
    
    gamescreen.appendChild(newElem);
};

module.exports = drawLevel;