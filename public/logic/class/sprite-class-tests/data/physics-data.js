physics_data = function (elem) {
    // spriteTouch() {};  // detects collisons with other elements and stops movement (ie: loop returns/breaks)
    // stepBack() {};  // elem moves away from collision-element (ie: floor, enemy, coin, etc.)
    // collisonEffect() {}; // based on element-collison-type, different function is called

    let rect = elem.getBoundingClientRect();

    elem.pos = {
        left = rect.left,
        top = rect.top,
        right = rect.right,
        bottom = rect.bottom
    };

    velocity = 2;
    gravity = 2;

    while (true) {
        prevTime = currentTime;
        currentTime = Date.now();

        dt = currentTime - prevTime;

        if (dt > 0.15) {
            dt = 0.15;
        };

        updatePos(dt);

        drawPos();
    };

};

module.exports = physics_data;