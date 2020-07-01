let clientStart = Date.now();
let myTimer = 0;
let shapeshift = false;

// test data: need to move back end logic to front for testing:
const sprite_Data = {
    beingType: "human"
};

const clientTimeKeeper = function () {
    let spriteHolder = document.querySelector(".transform-holder");
    let timerSpan = document.querySelector("#timer-span");
    timerSpan.innerHTML = myTimer;

    if (myTimer < 15) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = false;
                sprite_Data.beingType = "human";
                moveAndDisplay.transform(spriteHolder, sprite_Data.beingType);
            });
        };

    } else if (myTimer >= 15 && myTimer < 30) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer === 15) {
            console.log("As a shapeshifter, your transformation begins!");
            window.requestAnimationFrame(function () {
                shapeshift = true;
                sprite_Data.beingType = "sasquatch";
                console.log(spriteHolder);
            });
        };

    } else if (myTimer >= 30) {
        clientStart = Date.now();
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`restart myTimer!`);
        console.log(`=======================`);
    };

    // find difference in seconds:
    myTimer = Math.floor((Date.now() - clientStart) / 1000);
    return myTimer;
};

setInterval(clientTimeKeeper, 1000);

const moveAndDisplay = {

    37: {
        "human": {
            src: "/images/human-walk-left.png",
            moveClass: "move-left",
            moveDirection: "left",
            moveDist: -50,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            src: "/images/sassy-walk-left.png",
            moveClass: "move-left-squatch",
            moveDirection: "left",
            moveDist: -100,
            holdPos: "sasquatch",
            keyState: false,

        },
        "stone queen": {
            src: "/images/lyric-fly-left.png",
            moveClass: "move-fly-left",
            moveDirection: "left",
            moveDist: -50,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    39: {
        "human": {
            src: "/images/human-walk-right.png",
            moveClass: "move-right",
            moveDirection: "left",
            moveDist: 50,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            src: "/images/sassy-walk-right.png",
            moveClass: "move-right-squatch",
            moveDirection: "left",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "left",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    38: {
        "human": {
            src: "/images/lyric-jump-right.png",
            moveClass: "move-up",
            moveDirection: "top",
            moveDist: -50,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            src: "/images/sassy-jump-right.png",
            moveClass: "move-up",
            moveDirection: "top",
            moveDist: -100,
            holdPos: "sasquatch",
            keyState: false,

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "top",
            moveDist: -50,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    40: {
        "human": {
            src: "/images/lyric-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 50,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            src: "/images/sassy-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "top",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    76: {
        "human": {
            src: "/images/liftoff.png",
            moveClass: "liftoff",
            moveDirection: "top",
            moveDist: -50,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            src: "/images/sassy-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,

        },
        "stone queen": {
            src: "/images/landing.png",
            moveClass: "landing",
            moveDirection: "top",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    moveStand: {
        src: "/images/lyric-stand.png",

        moveClass: "move-stand",
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    idleSquatch: {
        src: "/images/idle-squatch.png",

        moveClass: "move-stand",
        // moveClass: "idle-squatch",
        holdPos: "sasquatch",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    moveFly: {
        src: "/images/lyric-fly-right.png",

        moveClass: "move-fly-right",
        holdPos: "stone queen hybrid",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    moveMethod: function (keyPressed, spriteHolderElem) {
        // TODO: break this method up into smaller, more modular methods

        let beingType = this.getBeingType();
        let ClientRect = spriteHolderElem.getBoundingClientRect();
        let topOrLeft = [this[keyPressed][beingType].moveDirection];

        console.log(`${ClientRect[topOrLeft]} + ${this[keyPressed][beingType].moveDist} = ${ClientRect[topOrLeft] + this[keyPressed][beingType].moveDist}`);

        // create incrementer:
        this.animateStep(
            spriteHolderElem,
            keyPressed,
            topOrLeft,
            (ClientRect[topOrLeft] + this[keyPressed][beingType].moveDist),
            this[keyPressed][beingType].moveDist
        );

        this.removeClass(spriteHolderElem);

        // reset animation:
        void spriteHolderElem.offsetWidth;

        spriteHolderElem.style.backgroundImage = `url("${this[keyPressed][beingType].src}")`;
        spriteHolderElem.classList.add(this[keyPressed][beingType].moveClass);

        this.transform(spriteHolderElem, beingType);
    },
    removeClass: function (element) {
        console.log("element");
        console.log(element);

        element.classList.remove(
            "move-stand",
            "move-left",
            "move-right",
            "move-up",
            "move-down",
            "liftoff",
            "landing",
            "move-fly-left",
            "move-fly-right",
            "move-right-squatch",
            "move-left-squatch"
        );
    },
    addClass: function (element, className) {
        element.classList.add(
            className
        );
    },
    nextAnimation: function (spriteHolder) {
        console.log("Finished animation!");

        spriteHolder.onanimationiteration
        console.log(event);
    },
    changeState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][sprite_Data.beingType].keyState = bool;
    },
    animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {

        this.keyPressed = keyPressed;
        let moveType;
        if (keyPressed === 38 && sprite_Data.beingType != "stone queen") {
            moveType = "jump up";
        } else {
            moveType = null;
        };
        this.animationLoop(spriteHolderElem, this[keyPressed][sprite_Data.beingType].moveDist, currentPos_TopOrLeft, moveType);

    },
    animationLoop: function (spriteHolderElem, dist_tot, topOrLeft, moveType, passOrigin) {

        let preMove_pos = parseInt(this.css(spriteHolderElem, topOrLeft), 10);
        console.log(this.css(spriteHolderElem, topOrLeft));

        let postMove_pos = preMove_pos - dist_tot, // 0 - 50 = -50?
            step_counter = 1,
            step_tot = 50,
            delay = 20;

        let step_dist = dist_tot / step_tot;
        let current_new_pos = preMove_pos;

        if (moveType === "jump up") {
            // step_tot = step_tot / 2;
            delay = delay / 2;
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
            if (step_counter >= step_tot && moveType === "jump up") {
                step_counter = 1;
                return moveAndDisplay.animationLoop(spriteHolderElem, dist_tot, topOrLeft, "jump down", preMove_pos);
            } else if (step_counter >= step_tot) {
                step_counter = 1;
                return;
            };
            step_counter += 1;
            current_new_pos += step_dist;
            spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
            console.log(`current_new_pos: ${current_new_pos}`);

            // Testing ONLY:
            let elemArr = ["step-01", "wall-01", "enemy-01", "ground-01"];



            let promise = new Promise(function(resolve, reject) {
                console.log("promise begins!")
                return resolve(moveAndDisplay.spriteTouch(mySprite, elemArr));
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
                    spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
                    console.log(`[after: in else]: current_new_pos: ${current_new_pos}`);

                    alert("when divs collide");
                    return;
                };
            });
        };

        loop();
    },
    css: function (element, property) {

        return element.getBoundingClientRect()[property];
    },
    getBeingType: function () {
        return sprite_Data.beingType;

    },
    setBeingType: function (newType) {
        return sprite_Data.beingType = newType;

    },
    transform: function (spriteHolderElem) {

        spriteHolderElem.onanimationend = () => {

            let beingType = this.getBeingType();
            console.log(`Animation iteration has ended!`);

            if (spriteHolderElem.classList.contains("liftoff") && beingType === "human") {
                this.removeClass(spriteHolderElem);

                // sprite_Data.beingType = "stone queen";
                this.setBeingType("stone queen");
                // this.addClass(spriteHolderElem, "divebomb");
                this.addClass(spriteHolderElem, "move-fly-left");
                spriteHolderElem.style.backgroundImage = `url("${this.moveFly.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (spriteHolderElem.classList.contains("landing") && beingType != "sasquatch") {
                this.removeClass(spriteHolderElem);

                // sprite_Data.beingType = "human";
                this.setBeingType("human");
                this.addClass(spriteHolderElem, "move-stand");
                spriteHolderElem.style.backgroundImage = `url("${this.moveStand.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (spriteHolderElem.classList.contains("move-fly-left") && beingType === "stone queen" || spriteHolderElem.classList.contains("move-fly-right") && beingType === "stone queen") {
                // TODO: countdown clock/timer only allows to use stone queen's powers. needs recharging
                console.log("You have the power of the stone queen!");

            } else { // return to idle sprite "standing" animation:

                this.removeClass(spriteHolderElem);
                let beingType = this.getBeingType();

                if (beingType === "human") {
                    // TODO: transform: if flying while transformed to sasquatch, then falls to ground (spritesheet fall and laying on ground and getting up):
                    spriteHolderElem.style.backgroundImage = `url("${this.moveStand.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

                } else if (beingType === "sasquatch") {
                    spriteHolderElem.style.backgroundImage = `url("${this.idleSquatch.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.
                };
                this.addClass(spriteHolderElem, "move-stand");

            };
        };
    },
    spriteTouch: function (mySprite, elem_ID_array) {
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
    }

    // all or nothing: sometimes a div can have all 3, but it's not until they intersect, will all 4 be true:
    // if (
    //     sprite_corners.left < groundFloor_corners.right &&
    //     sprite_corners.right > groundFloor_corners.left &&
    //     sprite_corners.top < groundFloor_corners.bottom &&
    //     sprite_corners.bottom > groundFloor_corners.top
    // ) {

    //     console.log(`
    //         ${sprite_corners.left} < ${groundFloor_corners.right} &&
    //         ${sprite_corners.right} > ${groundFloor_corners.left} &&
    //         ${sprite_corners.top} < ${groundFloor_corners.bottom} &&
    //         ${sprite_corners.bottom} > ${groundFloor_corners.top}
    //     `);

    //     if (groundFloor_corners.right - sprite_corners.left < 1) {
    //         console.log(`back collision: ${groundFloor_corners.right - sprite_corners.left} < 1`);

    //     } else if (sprite_corners.right - groundFloor_corners.left < 1) {
    //         console.log(`front collision: ${sprite_corners.right - groundFloor_corners.left} < 1`);

    //     } else if (groundFloor_corners.bottom - sprite_corners.top < 1) {
    //         console.log(`top collision: ${groundFloor_corners.bottom - sprite_corners.top} < 1`);

    //     } else if (sprite_corners.bottom - groundFloor_corners.top < 1) {
    //         console.log(`bottom collision: ${sprite_corners.bottom - groundFloor_corners.top} < 1`);

    //     } else {
    //         console.log("none of them!");
    //     };

    //     console.log(`
    //         ${sprite_corners.left} < ${groundFloor_corners.right} &&
    //         ${sprite_corners.right} > ${groundFloor_corners.left} &&
    //         ${sprite_corners.top} < ${groundFloor_corners.bottom} &&
    //         ${sprite_corners.bottom} > ${groundFloor_corners.top}
    //     `);

    //     console.log("when divs collide");
    //     return true;
    // } else {
    //     // alert("this is not working... and if it is, why?");

    // };
};

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:

const moveSpriteDiv = function (keyPressed, sprite_holderClassName, eventType) {
    let spriteHolderElem = document.querySelector(`.${sprite_holderClassName}`);

    if (eventType === "keydown") {

        console.log("moveAndDisplay[keyPressed][sprite_Data.beingType].keyState");
        console.log(moveAndDisplay[keyPressed][sprite_Data.beingType].keyState);

        // if state is false and "keydown", then change state to true and fire moveMethod once:
        if (moveAndDisplay[keyPressed][sprite_Data.beingType].keyState === false) { // if (false):
            moveAndDisplay.moveMethod(keyPressed, spriteHolderElem);
            let bool = true;
            moveAndDisplay.changeState(keyPressed, bool);
        }; // else (true) { do nothing }

    } else { // "keyup"
        let bool = false;
        moveAndDisplay.changeState(keyPressed, bool);
    };
};

const btnDownUp = function (event) {
    // let shapeshift = isShifted(); TODO: add this method to object moveAndDisplay
    let keyPressed = event.key;
    let keyCode = event.keyCode;

    if (shapeshift) {
        keyPressed = keyPressed.toUpperCase();
    } else {
        keyPressed = keyPressed.toLowerCase();
    };

    let eventType = event.type;

    if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40 || keyCode == 76) {
        console.log(`keyCode: ${keyCode}`);
        let sprite_holderClassName = "transform-holder";
        return moveSpriteDiv(keyCode, sprite_holderClassName, eventType);

    };
};

document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);


//////////////////////////////////////////////////////////////////
// testing if DOM elems intersect other elems:
//////////////////////////////////////////////////////////////////

const mySprite = document.querySelector(".transform-holder");
const groundFloor = document.querySelector(".ground");

console.log(mySprite.getClientRects());
console.log(mySprite.getBoundingClientRect());

console.log(groundFloor.getClientRects());
console.log(groundFloor.getBoundingClientRect());

const gameScreen = document.querySelector(".game-screen");
