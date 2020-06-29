let clientStart = Date.now();
let myTimer = 0;
let shapeshift = false;

// test data: need to move back end logic to front for testing:
const sprite_Data = {
    beingType: "human"
};

const clientTimeKeeper = function () {

    let timerSpan = document.querySelector("#timer-span");
    timerSpan.innerHTML = myTimer;

    if (myTimer < 15) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
            sprite_Data.beingType = "human";
            shapeshift = false;
        };

    } else if (myTimer >= 15 && myTimer < 30) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer === 15) {
            console.log("As a shapeshifter, your transformation begins!");
            shapeshift = true;
            sprite_Data.beingType = "sasquatch";
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

// const hitBox = document.querySelector(".hit-box");
// const hitBoxImg = document.querySelector("#hit-box-img");

const moveAndDisplay = {

    37: {
        "human": {
            src: "/images/human-walk-left.png",
            moveClass: "move-left",
            moveDirection: "left",
            moveDist: -50,
            holdPos: "human",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "sasquatch": {
            src: "/images/sassy-walk-left.png",
            moveClass: "move-left-squatch",
            moveDirection: "left",
            moveDist: -100,
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "stone queen": {
            src: "/images/lyric-fly-left.png",
            moveClass: "move-fly-left",
            moveDirection: "left",
            moveDist: -50,
            holdPos: "stone queen",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

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
            step_counter: 0,
            preMove_pos: null

        },
        "sasquatch": {
            src: "/images/sassy-walk-right.png",
            moveClass: "move-right-squatch",
            moveDirection: "left",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "left",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

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
            step_counter: 0,
            preMove_pos: null

        },
        "sasquatch": {
            src: "/images/sassy-jump-right.png",
            moveClass: "move-up",
            moveDirection: "top",
            moveDist: -100,
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "top",
            moveDist: -50,
            holdPos: "stone queen",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

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
            step_counter: 0,
            preMove_pos: null

        },
        "sasquatch": {
            src: "/images/sassy-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",
            moveClass: "move-fly-right",
            moveDirection: "top",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        }
    },


    a: {
        src: "/images/human-walk-left.png",
        src2: [
            "/images/human-walk-left.png",
            "/images/sassy-walk-left.png",
            "/images/lyric-fly-left.png"
        ],

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -50,
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null

    },
    d: {
        src: "/images/human-walk-right.png",
        src2: [
            "/images/human-walk-right.png",
            "/images/sassy-walk-right.png",
            "/images/lyric-fly-right.png"
        ],

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +50,
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null

    },
    w: {
        src: "/images/lyric-jump-right.png",
        src2: [
            "/images/lyric-jump-right.png",
            "/images/sassy-jump-right.png",
            "/images/lyric-fly-right.png"
        ],

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -50,
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null,
        jumpAction: function (element, jumpDist) {
            element.style.top = jumpDist; // move up (jumping)
            element.style.top = -jumpDist; // move back down (falling) - slower?
        }
    },
    s: {
        src: "/images/lyric-jump-left.png",
        src2: [
            "/images/lyric-jump-left.png",
            "/images/sassy-jump-left.png",
            "/images/lyric-fly-left.png"
        ],

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +50,
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    l: {
        "human": {
            src: "/images/liftoff.png",
            moveClass: "liftoff",
            moveDirection: "top",
            moveDist: -50,
            holdPos: "human",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "sasquatch": {
            src: "/images/sassy-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 100,
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

        },
        "stone queen": {
            src: "/images/landing.png",
            moveClass: "landing",
            moveDirection: "top",
            moveDist: 50,
            holdPos: "stone queen",
            keyState: false,
            step_counter: 0,
            preMove_pos: null

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

        let ClientRect = spriteHolderElem.getBoundingClientRect();
        let topOrLeft = [this[keyPressed][sprite_Data.beingType].moveDirection];

        console.log(`${ClientRect[topOrLeft]} + ${this[keyPressed][sprite_Data.beingType].moveDist} = ${ClientRect[topOrLeft] + this[keyPressed][sprite_Data.beingType].moveDist}`);

        // create incrementer:
        this.animateStep(
            spriteHolderElem,
            keyPressed,
            topOrLeft,
            (ClientRect[topOrLeft] + this[keyPressed][sprite_Data.beingType].moveDist),
            this[keyPressed][sprite_Data.beingType].moveDist
        );

        this.removeClass(spriteHolderElem);

        // needed to reset animation:
        void spriteHolderElem.offsetWidth;

        spriteHolderElem.style.backgroundImage = `url("${this[keyPressed][sprite_Data.beingType].src}")`;
        spriteHolderElem.classList.add(this[keyPressed][sprite_Data.beingType].moveClass);

        let animationClass = document.querySelector(".transform-holder");
        console.log("animationClass");
        console.log(animationClass);

        animationClass.onanimationend = () => {
            console.log(`Animation iteration has ended!`);

            if (animationClass.classList.contains("liftoff")) {
                this.removeClass(animationClass);

                sprite_Data.beingType = "stone queen";
                this.addClass(animationClass, "move-fly-left");
                animationClass.style.backgroundImage = `url("${this.moveFly.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (animationClass.classList.contains("landing")) {
                this.removeClass(animationClass);

                sprite_Data.beingType = "human";
                this.addClass(animationClass, "move-stand");
                animationClass.style.backgroundImage = `url("${this.moveStand.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (animationClass.classList.contains("move-fly-left") || animationClass.classList.contains("move-fly-right") || sprite_Data.beingType === "stone queen") {
                // TODO: countdown clock/timer only allows to use stone queen's powers. needs recharging
                console.log("You have the power of the stone queen!");

            } else { // return to idle sprite "standing" animation:

                console.log(keyPressed);
                console.log("sprite_Data.beingType");
                console.log(sprite_Data.beingType);
                this.removeClass(animationClass);

                if (sprite_Data.beingType === "human") {
                    // this.addClass(animationClass, "move-stand");
                    animationClass.style.backgroundImage = `url("${this.moveStand.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

                } else if (sprite_Data.beingType === "sasquatch") {
                    // this.addClass(animationClass, "idle-squatch");
                    animationClass.style.backgroundImage = `url("${this.idleSquatch.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.
                };
                this.addClass(animationClass, "move-stand");

            };
        };
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

        animationClass.onanimationiteration
        console.log(event);
    },
    changeState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][sprite_Data.beingType].keyState = bool;
    },
    animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {
        // spriteHolder.style[topOrLeft] = `${rect[topOrLeft] + this[keyPressed].moveDist}px`;
        // let preMove_pos = spriteHolderElem.getBoundingClientRect()[currentPos_TopOrLeft];

        this.keyPressed = keyPressed;
        let moveType;
        if (keyPressed === "w" || keyPressed === 38 && sprite_Data.beingType != "stone queen") {
            moveType = "jump up";
        } else {
            moveType = null;
        };
        this.animationLoop(spriteHolderElem, this[keyPressed][sprite_Data.beingType].moveDist, currentPos_TopOrLeft, moveType);

    },
    animationLoop: function (spriteHolderElem, dist_tot, topOrLeft, moveType, passOrigin) {

        let preMove_pos = parseInt(this.css(spriteHolderElem, topOrLeft), 10);
        console.log(this.css(spriteHolderElem, topOrLeft));
        console.log(spriteHolderElem);
        console.log(topOrLeft);

        let postMove_pos = preMove_pos - dist_tot, // 0 - 50 = -50?
            step_counter = 1,
            step_tot = 50,
            delay = 20;

        console.log("postMove_pos");
        console.log(postMove_pos);
        console.log("preMove_pos:");
        console.log(preMove_pos);

        console.log("moveType:");
        console.log(moveType);

        let step_dist = dist_tot / step_tot;
        let current_new_pos = preMove_pos;

        if (moveType === "jump up") {
            // step_tot = step_tot / 2;
            delay = delay / 2;
            step_dist = dist_tot / step_tot;

            // dist_tot = dist_tot * 2; // distance (back and forth)
            // jumpAction: function (element, jumpDist) {
            //     element.style.top = jumpDist; // move up (jumping)
            //     element.style.top = -jumpDist; // move back down (falling) - slower?
            // }

        } else if (moveType === "jump down") {
            // step_tot = step_tot / 2;
            // delay = delay / 2;
            postMove_pos = passOrigin;
            step_dist = step_dist * -1;
        };

        function loop() {
            if (step_counter >= step_tot && moveType === "jump up") {
                step_counter = 1;
                console.log("preMove_pos");
                console.log(preMove_pos);
                return moveAndDisplay.animationLoop(spriteHolderElem, dist_tot, topOrLeft, "jump down", preMove_pos);
            } else if (step_counter >= step_tot) {
                step_counter = 1;
                return;
            };
            // let fractional_step = step_counter / step_tot;
            step_counter += 1;
            // console.log("preMove_pos");
            // console.log(preMove_pos); 0 - (-50 * 1/20)
            current_new_pos += step_dist;
            spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
            console.log(`current_new_pos: ${current_new_pos}`);
            // spriteHolderElem.style[topOrLeft] = `${(preMove_pos - (postMove_pos * fractional_step)).toFixed(0)}px`; // 0 - 50 = -50?
            // console.log(`style pos each iteration: ${(preMove_pos - (postMove_pos * fractional_step)).toFixed(0)}px`); // 0 - 50 = -50?
            setTimeout(loop, delay);
        }

        loop();
    },
    css: function (element, property) {
        console.log("element");
        console.log(element);
        console.log("property");
        console.log(property);
        return element.getBoundingClientRect()[property];
        // return window.getComputedStyle(element, null).getPropertyValue(property);
    }
};

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:
// const moveSpriteDiv = function (keyPressed, sprite_ID, sprite_holderClassName, eventType) {

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
    // console.log(`shapeshift bool: ${shapeshift}`);
    let keyPressed = event.key;
    let keyCode = event.keyCode;

    if (shapeshift) {
        keyPressed = keyPressed.toUpperCase();
    } else {
        keyPressed = keyPressed.toLowerCase();
    };

    let eventType = event.type;

    if (keyPressed == "w" || keyPressed == "a" || keyPressed == "s" || keyPressed == "d" || keyPressed == "W" || keyPressed == "A" || keyPressed == "S" || keyPressed == "D" || keyPressed == "l") {
        let sprite_holderClassName = "transform-holder";
        return moveSpriteDiv(keyPressed, sprite_holderClassName, eventType); // dispalyMove(): separate func?

        // let sprite_ID = "hit-box-lyric"; // TODO: userinput only / reuse function with diff parameters?
        // return moveSpriteDiv(keyPressed, sprite_ID, sprite_holderClassName, eventType);
    } else if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40) {
        console.log(`keyCode: ${keyCode}`);
        let sprite_holderClassName = "transform-holder";
        return moveSpriteDiv(keyCode, sprite_holderClassName, eventType);
    };
};

document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);