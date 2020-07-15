const spriteTouch = function (mySprite, elem_ID_array) {

    console.log("spriteTouch method fires");
    
    // elem1, elem2:
    // testing ONLY: pass in array of objects?

    let sprite_corners = mySprite.getBoundingClientRect();
    let result;

    elem_ID_array.forEach(elem_ID => {
        let elemToCheck = document.getElementById(elem_ID);
        let elem_coords = elemToCheck.getBoundingClientRect();
        console.log(elemToCheck);
        console.log(elem_coords);

        if (
            sprite_corners.left < elem_coords.right &&
            sprite_corners.right > elem_coords.left &&
            sprite_corners.top < elem_coords.bottom &&
            sprite_corners.bottom > elem_coords.top
        ) {

            console.log(`
                ${sprite_corners.left} < ${elem_coords.right} &&
                ${sprite_corners.right} > ${elem_coords.left} &&
                ${sprite_corners.top} < ${elem_coords.bottom} &&
                ${sprite_corners.bottom} > ${elem_coords.top}
            `);

            if (elem_coords.right - sprite_corners.left < 1) {
                console.log(`back collision: ${elem_coords.right - sprite_corners.left} < 1`);

            } else if (sprite_corners.right - elem_coords.left < 1) {
                console.log(`front collision: ${sprite_corners.right - elem_coords.left} < 1`);

            } else if (elem_coords.bottom - sprite_corners.top < 1) {
                console.log(`top collision: ${elem_coords.bottom - sprite_corners.top} < 1`);

            } else if (sprite_corners.bottom - elem_coords.top < 1) {
                console.log(`bottom collision: ${sprite_corners.bottom - elem_coords.top} < 1`);

            } else {
                console.log("none of them!");
            };

            console.log(`
                ${sprite_corners.left} < ${elem_coords.right} &&
                ${sprite_corners.right} > ${elem_coords.left} &&
                ${sprite_corners.top} < ${elem_coords.bottom} &&
                ${sprite_corners.bottom} > ${elem_coords.top}
            `);

            console.log("when divs collide");
            result = true;
        };
    });
    return result;
};

module.exports = spriteTouch