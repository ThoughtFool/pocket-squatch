const joinSquares = function (div01, div02) {
    console.info("div01");
    console.info(div01);
    console.info("div02");
    console.info(div02);

    // let levelObj = {
    //     xPos: div01.coords.left,
    //     yPos: div01.coords.y,
    //     width: div01.coords.width + div02.coords.width,
    //     height: div01.coords.height,
    //     elemType: "div",
    //     class_actorType: div01.className,
    //     class_moveType: "obstacle",
    //     id: div02.id,
    //     // imgUrl: "/images/lyric-stand.png"
    // };

    let levelObj = {
        // className: div01.className,
        coords: {
            left: div01.coords.left,
            top: div01.coords.top,
            width: div01.coords.width + div02.coords.width,
            height: div01.coords.height,
            right: this.left + this.width            
        },
        // xPos: div01.coords.left,
        // yPos: div01.coords.top,
        // width: div01.coords.width + div02.coords.width,
        // height: div01.coords.height,
        elemType: "div",
        className: div01.className,
        class_moveType: "obstacle",
        id: div02.id,
        imgUrl: ""
    };

    return levelObj;
};

module.exports = joinSquares;