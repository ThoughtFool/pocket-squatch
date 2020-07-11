const space_key = require("../../../data/instance-data");
const gamespace = require("../../../data/game-space");
// const sprite_data = gamespace.data[space_key.index].gameInstance.player.sprite;
// const sprite_beingType = gamespace.data.length < 1 ? "human" : gamespace.data[space_key.index].gameInstance.player.sprite.beingType;

const mySprite = document.querySelector(".transform-holder");
const groundFloor = document.querySelector(".ground");

const moveAndDisplay = {

    // sprite_beingType: gamespace.data.length < 1 ? "human" : gamespace.data[space_key.index].gameInstance.player.sprite.beingType,

    update_beingType: function () {
        gamespace.data[space_key.index].gameInstance.player.sprite.beingType = this.sprite_beingType;
    },
        // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();

    sprite_beingType: function () {
        if (space_key.index == null) {

            return "human"

        } else {
            console.log("gamespace.............");
            console.log(gamespace);
            return gamespace.data[space_key.index].gameInstance.player.sprite.beingType;
        };
    },

    37: {
        "human": {
            src: "/images/human-walk-left.png",
            moveClass: "move-left",
            moveDirection: "left",
            moveDist: -250,
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
            moveDist: -250,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    39: {
        "human": {
            src: "/images/human-walk-right.png",
            moveClass: "move-right",
            moveDirection: "left",
            moveDist: 250,
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
            moveDist: 250,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    38: {
        "human": {
            src: "/images/lyric-jump-right.png",
            moveClass: "move-up",
            moveDirection: "top",
            moveDist: -250,
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
            moveDist: -250,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    40: {
        "human": {
            src: "/images/lyric-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 250,
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
            moveDist: 250,
            holdPos: "stone queen",
            keyState: false,

        }
    },
    76: {
        "human": {
            src: "/images/liftoff.png",
            moveClass: "liftoff",
            moveDirection: "top",
            moveDist: -250,
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
            moveDist: 250,
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
        this[keyPressed][this.sprite_beingType()].keyState = bool;
    },
    animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {

        this.keyPressed = keyPressed;
        let moveType;
        if (keyPressed === 38 && this.sprite_beingType() != "stone queen") {
            moveType = "jump up";
        } else {
            moveType = null;
        };
        this.animationLoop(spriteHolderElem, this[keyPressed][this.sprite_beingType()].moveDist, currentPos_TopOrLeft, moveType);

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
                return moveAndDisplay.animationLoop(spriteHolderElem, dist_tot, topOrLeft, "jump down", preMove_pos);
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
                        // spriteHolderElem.style[topOrLeft] = `translateY(${current_new_pos}px`;
                        spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
                        // spriteHolderElem.style.animationPlayState = "paused";
                        // spriteHolderElem.style.backgroundColor = "deeppink";
                        console.log(`[after: in else]: current_new_pos: ${current_new_pos}`);

                        // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();
                        
                        console.log(gamespace.data[space_key.index].gameInstance.player.sprite);

                        // alert("when divs collide");
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
        return this.sprite_beingType();

    },
    setBeingType: function (newType) {
        return (space_key != null ? gamespace.data[space_key.index].gameInstance.player.sprite.beingType = newType : "human");
        // return typeof(gamespace.data[space_key.index]) !== 'undefined' ? gamespace.data[space_key.index].gameInstance.player.sprite.beingType = newType : "human";
        // return this.sprite_beingType = newType;

    },
    transform: function (spriteHolderElem) {

        spriteHolderElem.onanimationend = () => {

            let beingType = this.getBeingType();
            console.log(`Animation iteration has ended!`);

            if (spriteHolderElem.classList.contains("liftoff") && beingType === "human") {
                this.removeClass(spriteHolderElem);

                // this.sprite_beingType = "stone queen";
                this.setBeingType("stone queen");
                // this.addClass(spriteHolderElem, "divebomb");
                this.addClass(spriteHolderElem, "move-fly-left");
                spriteHolderElem.style.backgroundImage = `url("${this.moveFly.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (spriteHolderElem.classList.contains("landing") && beingType != "sasquatch") {
                this.removeClass(spriteHolderElem);

                // this.sprite_beingType = "human";
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

module.exports = moveAndDisplay;