let joinSquares = function (div01, div02, className) {
    let levelObj = {
        xPos: div01.left,
        yPos: div01.y,
        width: div01.width + div02.width,
        height: div01.height,
        elemType: "div",
        class_actorType: className,
        class_moveType: "obstacle",
        id: div01.id,
        // imgUrl: "/images/lyric-stand.png"
    };

    return levelObj;
};

module.exports = joinSquares;