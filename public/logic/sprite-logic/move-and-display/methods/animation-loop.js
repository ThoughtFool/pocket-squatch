const css = require("./get-element-property");
const spriteTouch = require("./sprite-touch");

const animationLoop = function (spriteHolderElem, dist_tot, topOrLeft, moveType, passOrigin) {

    let preMove_pos = parseInt(css(spriteHolderElem, topOrLeft), 10);
    console.log(css(spriteHolderElem, topOrLeft));

    let postMove_pos = preMove_pos - dist_tot, // 0 - 50 = -50?
        step_counter = 1,
        step_tot = 50,
        delay = 20;

    let step_dist = dist_tot / step_tot;
    let current_new_pos = preMove_pos;

    if (moveType === "jump up") {
        // step_tot = step_tot / 2;
        delay = delay;
        step_dist = dist_tot / step_tot;

        // TODO:
        // dist_tot = dist_tot * 2; // distance (back and forth)
        // element.style.top = jumpDist; // move up (jumping)
        // element.style.top = -jumpDist; // move back down (falling) - slower?
        // console.log(preMove_pos); 0 - (-50 * 1/20)

    } else if (moveType === "jump down") {
        postMove_pos = passOrigin;
        step_dist = step_dist * -1;
    };

    function loop() {
        if (step_counter >= step_tot && moveType === "jump up_") {
            step_counter = 1;
            return animationLoop(spriteHolderElem, dist_tot, topOrLeft, "jump down", preMove_pos);
        } else if (step_counter >= step_tot) {
            step_counter = 1;
            return;
        };
        
        step_counter += 1;
        current_new_pos += step_dist;
        // spriteHolderElem.style[topOrLeft] = `translateY(${current_new_pos}px`;
        spriteHolderElem.style[topOrLeft] = current_new_pos + "px";

        console.log(`current_new_pos: ${current_new_pos}`);

        // Testing ONLY:
        let elemArr = ["step-01", "wall-01", "enemy-01", "enemy-02", "ground-01"];

        let promise = new Promise(function (resolve, reject) {
            console.log("promise begins!")
            return resolve(spriteTouch(spriteHolderElem, elemArr));
        });
        promise
            .then(function (collisionDetected) {
                console.log("collisionDetected");
                console.log(collisionDetected);
                if (!collisionDetected) {
                    setTimeout(loop, delay);

                } else {
                    console.log(`[before: in else]: current_new_pos: ${current_new_pos}`);

                    current_new_pos -= step_dist;
                    // spriteHolderElem.style[topOrLeft] = `translateY(${current_new_pos}px`;
                    spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
                    spriteHolderElem.style.animationPlayState = "paused";
                    spriteHolderElem.style.backgroundColor = "deeppink";
                    console.log(`[after: in else]: current_new_pos: ${current_new_pos}`);
                    return;
                };
            });
    };

    loop();
};

module.exports = animationLoop;