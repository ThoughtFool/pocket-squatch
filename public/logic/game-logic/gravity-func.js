const gravityFunc = function (element, groundObj) {
    let elem_coords = element.getBoundingClientRect();
    let ground = groundObj.ground.getBoundingClientRect();
    let step = groundObj.step.getBoundingClientRect();
    let wall = groundObj.wall.getBoundingClientRect();

    // console.log(ground);
    // console.log(step);
    // console.log(wall);

    if (elem_coords.bottom < ground.top - 25 && elem_coords.bottom < step.top - 25 && elem_coords.bottom < wall.top - 25) {
        let weight = elem_coords.top + 20;
        element.style.top = weight + "px"
        // element.style.transform = `translateY(${weight}px)`;

    };
};

module.exports = gravityFunc;