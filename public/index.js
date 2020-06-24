let clientStart = Date.now();
let myTimer = 0;
let shapeshift = false;

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
    a: {
        src: "/images/lyric-sprite-left.png",

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -100,
        holdPos: "human"
    },
    d: {
        src: "/images/lyric-sprite-right.png",

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +100,
        holdPos: "human"
    },
    w: {
        src: "/images/lyric-sprite-up.png",

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -100,
        holdPos: "human"

    },
    s: {
        src: "/images/lyric-sprite-jump.png",

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +100,
        holdPos: "human"
    },
    A: {
        src: "/images/sassy-sprite-left.png",

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -100,
        holdPos: "human"
    },
    D: {
        src: "/images/sassy-sprite-right.png",

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +100,
        holdPos: "human"
    },
    W: {
        src: "/images/sassy-sprite-up-right.png",

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -100,
        holdPos: "human"

    },
    S: {
        src: "/images/sassy-sprite-up-left.png",

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +100,
        holdPos: "human"
    },
    moveMethod: function (keyPressed, hitBox_ID, sprite_holder) {
        let spriteHolder = document.querySelector(`.${sprite_holder}`);
        let moveBox = document.getElementById(hitBox_ID);
        let hitBox_bg = moveBox.childNodes[1];
        let rect = spriteHolder.getBoundingClientRect();
        // let rect = moveBox.getBoundingClientRect();
        let loc = [this[keyPressed].moveDirection];

        console.log(`${rect[loc]} + ${this[keyPressed].moveDist}`);
        console.log(rect[loc] + this[keyPressed].moveDist);

        spriteHolder.style[loc] = `${rect[loc] + this[keyPressed].moveDist}px`;
        // moveBox.style[loc] = `${rect[loc] + this[keyPressed].moveDist}px`;

        this.removeClass(hitBox_bg);
        spriteHolder.style.backgroundImage = `url("${this[keyPressed].src}")`;
        // hitBox_bg.style.backgroundImage = `url("${this[keyPressed].src}")`;
        hitBox_bg.classList.add(this[keyPressed].moveClass);
        spriteHolder.classList.add(this[keyPressed].holdPos);
    },
    removeClass: function (element) {
        element.classList.remove(
            "move-left",
            "move-right",
            "move-up",
            "move-down",
        );
    }
};

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:
const moveSpriteDiv = function (keyPressed, sprite_ID, sprite_holder) {
    return moveAndDisplay.moveMethod(keyPressed, sprite_ID, sprite_holder);
};

const btnPress = function (event) {

    let keyPressed = event.key;
    // let keyCode = event.keyCode;
    // let shapeshift = isShifted();
    console.log(shapeshift);

    if (shapeshift) {
        keyPressed = keyPressed.toUpperCase();
    } else {
        keyPressed = keyPressed.toLowerCase();
    };

    if (keyPressed == "w" || keyPressed == "a" || keyPressed == "s" || keyPressed == "d" || keyPressed == "W" || keyPressed == "A" || keyPressed == "S" || keyPressed == "D") {
        console.log(keyPressed);
        let sprite_holder = "transform-holder";
        let sprite_ID = "hit-box-lyric"; // TODO: userinput only / reuse function with diff parameters?
        return moveSpriteDiv(keyPressed, sprite_ID, sprite_holder); // dispalyMove(): separate func?
    };
};

document.addEventListener("keypress", btnPress);