const colorChange = require("./color-change");
const createLevel = function () {

    const dynaSquareContent = document.querySelectorAll(".dyna-square-content");
    // const dynaSquareContent = document.getElementsByClassName("dyna-square-content");
    for (let i = 0; i < dynaSquareContent.length; i++) {
        let dynaSquare = dynaSquareContent[i];
        let dynaSquareID = document.getElementById(dynaSquare.id);
        dynaSquare.addEventListener("mousedown", colorChange);
        dynaSquareID.addEventListener("mouseover", colorChange);
    };
};

module.exports = createLevel;