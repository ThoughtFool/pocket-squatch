const joinSquares = function (bool, div01, div02) {
    let levelObj = {};
 // merge?    console.info("div01");
    console.info("div01");
    console.info(div01);
    console.info("div02");
    console.info(div02);

    if (bool) { // merge = true;
        levelObj = {
            coords: {
                left: div01.coords.left,
                top: div01.coords.top,
                width: div01.coords.width + div02.coords.width,
                height: div01.coords.height,
                right: this.left + this.width            
            },
            elemType: "div",
            className: div01.className,
            class_moveType: "obstacle",
            id: div01.id,
            imgUrl: ""
        };
    } else { // merge = false;
        levelObj = {
            coords: {
                left: div01.coords.left,
                top: div01.coords.top,
                width: div01.coords.width,
                height: div01.coords.height,
                right: this.left + this.width
            },
            elemType: "div",
            className: div01.className,
            class_moveType: "obstacle",
            id: div01.id,
            imgUrl: ""
        };
    };
    return levelObj;
};

module.exports = joinSquares;