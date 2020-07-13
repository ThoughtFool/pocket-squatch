const { loop } = require("../../../../../data/level-data");

const updatePos = function (elem, elemObj, direction, distance, moveType) {
    let rect = elem.getBoundingClientRect();

    elemObj.pos = {
        left = rect.left,
        top = rect.top,
        right = rect.right,
        bottom = rect.bottom
    };

    let step = distance * .15;

    let loop = function (elem, step) {
        while ()
        elem.style[direction] += `${step}px`

    };

    


}