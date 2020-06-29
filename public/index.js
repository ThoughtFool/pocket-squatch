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

// setInterval(clientTimeKeeper, 1000);

// const hitBox = document.querySelector(".hit-box");
// const hitBoxImg = document.querySelector("#hit-box-img");

const moveAndDisplay = {
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
        preMove_pos: null

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
        src: "/images/liftoff.png",
        src2: [
            "/images/liftoff.png",
            // "/images/lyric-fly-left.png",
            // "/images/sassy-jump-left.png",
        ],
        

        moveClass: "liftoff",
        moveDirection: "top",
        moveDist: -50,
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },

    A: {
        src: "/images/sassy-sprite-left.png",
        src2: [
            "/images/liftoff.png",
            "/images/sassy-sprite-left.png",
            // "/images/sassy-jump-left.png",
        ],

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -100,
        holdPos: "sasquatch",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    D: {
        src: "/images/sassy-sprite-right.png",
        src2: [
            "/images/liftoff.png",
            "/images/sassy-sprite-right.png",
            // "/images/sassy-jump-left.png",
        ],

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +100,
        holdPos: "sasquatch",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    W: {
        src: "/images/sassy-sprite-up-right.png",
        src2: [
            "/images/liftoff.png",
            "/images/sassy-sprite-up-right.png",
            // "/images/sassy-jump-left.png",
        ],

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -100,
        holdPos: "sasquatch",
        keyState: false,
        step_counter: 0,
        preMove_pos: null

    },
    S: {
        src: "/images/sassy-sprite-up-left.png",
        src2: [
            "/images/liftoff.png",
            "/images/sassy-sprite-up-left.png",
            // "/images/sassy-jump-left.png",
        ],

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +100,
        holdPos: "sasquatch",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    moveStand: {
        src: "/images/lyric-stand.png",
        src2: [
            "/images/lyric-stand.png",
            "/images/sassy-sprite-up-left.png",
            // "/images/sassy-jump-left.png",
        ],
        

        moveClass: "move-stand",
        holdPos: "human",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    moveFly: {
        src: "/images/lyric-fly-right.png",
        src2: [
            "/images/sassy-sprite-up-left.png",
            "/images/sassy-jump-left.png",
            "/images/lyric-fly-right.png"
        ],

        moveClass: "move-fly",
        holdPos: "stone queen hybrid",
        keyState: false,
        step_counter: 0,
        preMove_pos: null
    },
    moveMethod: function (keyPressed, spriteHolderElem) {
        // moveMethod: function (keyPressed, hitBox_ID, sprite_holderClassName) {
        // if (this[keyPressed].keyState === false) {
        // let moveBox = document.getElementById(hitBox_ID);
        // let hitBox_bg = moveBox.childNodes[1];

        let ClientRect = spriteHolderElem.getBoundingClientRect();
        let topOrLeft = [this[keyPressed].moveDirection];

        console.log(`${ClientRect[topOrLeft]} + ${this[keyPressed].moveDist} = ${ClientRect[topOrLeft] + this[keyPressed].moveDist}`);

        // create incrementer:
        this.animateStep(
            spriteHolderElem,
            keyPressed,
            topOrLeft,
            (ClientRect[topOrLeft] + this[keyPressed].moveDist),
            this[keyPressed].moveDist
        );
        // this.animateStep(spriteHolderElem, ClientRect[topOrLeft], (ClientRect[topOrLeft] + this[keyPressed].moveDist));
        // spriteHolderElem.style[topOrLeft] = `${ClientRect[topOrLeft] + this[keyPressed].moveDist}px`;

        this.removeClass(spriteHolderElem);

        // needed to reset animation:
        void spriteHolderElem.offsetWidth;

        let beingTypeIndex = null;
        if (sprite_Data.beingType === "human") {
            beingTypeIndex = 0;
        } else if (sprite_Data.beingType === "sasquatch") {
            beingTypeIndex = 1;
        } else if (sprite_Data.beingType === "stone queen") {
            beingTypeIndex = 2;
        } else {
            console.log("beingType not found");
        };

        spriteHolderElem.style.backgroundImage = `url("${this[keyPressed].src2[beingTypeIndex]}")`;
        // spriteHolderElem.style.backgroundImage = `url("${this[keyPressed].src}")`;
        spriteHolderElem.classList.add(this[keyPressed].moveClass);
        // spriteHolderElem.classList.add(this[keyPressed].holdPos);

        let animationClass = document.querySelector(".transform-holder");
        console.log("animationClass");
        console.log(animationClass);

        animationClass.onanimationend = () => {
            console.log(`Animation iteration has ended!`);
            
            if (animationClass.classList.contains("liftoff")) {
                this.removeClass(animationClass);
                this.addClass(animationClass, "move-fly");
                sprite_Data.beingType = "stone queen";
                animationClass.style.backgroundImage = `url("${this.moveFly.src2[2]}")`;

            } else if (animationClass.classList.contains("move-fly") || sprite_Data.beingType === "stone queen") {
                // countdown clock/timer only allows to use stone queen's powers. needs recharging
                console.log("You have the power of the stone queen!");

            } else { // return to idle sprite "standing" animation:
                console.log(keyPressed);
                this.removeClass(animationClass);
                this.addClass(animationClass, "move-stand");
                animationClass.style.backgroundImage = `url("${this.moveStand.src2[0]}")`;
            };
        };

        // animationClass.addEventListener('animationiteration', this.nextAnimation(animationClass));

        // } else {
        // console.log("this will always fire!");
        // };


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
            "move-fly"
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

        this[keyPressed].keyState = bool;
        // console.log(this[keyPressed].keyState);
    },
    animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {
        // spriteHolder.style[topOrLeft] = `${rect[topOrLeft] + this[keyPressed].moveDist}px`;
        this.keyPressed = keyPressed;

        console.log(spriteHolderElem.getBoundingClientRect());
        let preMove_pos = spriteHolderElem.getBoundingClientRect()[currentPos_TopOrLeft];

        this.translate(spriteHolderElem, this[keyPressed].moveDist, currentPos_TopOrLeft);
        // this.animateCount(preMove_pos, dist, 20, 0, null);


    },
    animateCount: function (
        // preMove_pos, // 0
        // dist_tot, // 50
        // step_tot, // 20
        // step_counter, // 0
        // step_dist, // 2.5 TODO: default = null?
        // current_new_pos // 0 + 2.5 + "px" TODO: default = null?
    ) {
        console.log("this[this.keyPressed].step_counter");
        console.log(this[this.keyPressed].step_counter);
        let step_counter = this[this.keyPressed].step_counter;

        if (step_counter <=0) {
            let preMove_pos = this[this.keyPressed].preMove_pos;
        };
        let postMove_pos = preMove_pos + dist_tot;
        let preMove_pos = this[this.keyPressed].preMove_pos,
        dist_tot,
        step_tot;
        // console.log(postMove_pos);
        
        let delay = 20;
        
        let step_dist = dist_tot / step_tot;

            if (step_counter <= step_tot) {
                current_new_pos = preMove_pos + step_dist + "px";
                step_counter += 1;
                setTimeout(this.animateCountLoop, delay);
            } else {
                step_counter = 0;
                return;
        };
    },
    translate: function (spriteHolderElem, dist_tot, topOrLeft) {

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

        let step_dist = dist_tot / step_tot;
        let current_new_pos = preMove_pos;
        
        function loop() {
            if (step_counter >= step_tot) {
                step_counter = 1;
                return;
            }
            let fractional_step = step_counter / step_tot;
            step_counter += 1;
            // console.log("preMove_pos");
            // console.log(preMove_pos); 0 - (-50 * 1/20)
            current_new_pos += step_dist;
            spriteHolderElem.style[topOrLeft] = current_new_pos + "px";
            console.log(current_new_pos);
            // spriteHolderElem.style[topOrLeft] = `${(preMove_pos - (postMove_pos * fractional_step)).toFixed(0)}px`; // 0 - 50 = -50?
            console.log(`style pos each iteration: ${(preMove_pos - (postMove_pos * fractional_step)).toFixed(0)}px`); // 0 - 50 = -50?
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

class myCanvasTest {
    constructor(width, height, color, x, y, type) {
        // this.type = type;
        // this.width = width;
        // this.height = height;
        // this.x = x;
        // this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        // this.bounce = 0.6;
        this.update = function () {
            ctx = myGameArea.context;
            // ctx.fillStyle = color;
            // ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function () {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
            // this.hitBottom();
        }
    };
}

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:
// const moveSpriteDiv = function (keyPressed, sprite_ID, sprite_holderClassName, eventType) {

const moveSpriteDiv = function (keyPressed, sprite_holderClassName, eventType) {
    let spriteHolderElem = document.querySelector(`.${sprite_holderClassName}`);

    if (eventType === "keydown") {

        // if state is false and "keydown", then change state to true and fire moveMethod once:
        if (!moveAndDisplay[keyPressed].keyState) { // if (false):
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
    };
};

document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);