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

// setInterval(clientTimeKeeper, 1000);

// const hitBox = document.querySelector(".hit-box");
// const hitBoxImg = document.querySelector("#hit-box-img");

const moveAndDisplay = {
    a: {
        src: "/images/human-walk-left.png",

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -50,
        holdPos: "human",
        keyState: false
    },
    d: {
        src: "/images/human-walk-right.png",

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +50,
        holdPos: "human",
        keyState: false
    },
    w: {
        src: "/images/lyric-jump-right.png",

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -50,
        holdPos: "human",
        keyState: false

    },
    s: {
        src: "/images/lyric-jump-left.png",

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +50,
        holdPos: "human",
        keyState: false
    },

    l: {
        src: "/images/lyric-liftoff.png",

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +50,
        holdPos: "human",
        keyState: false
    },

    A: {
        src: "/images/sassy-sprite-left.png",

        moveClass: "move-left",
        moveDirection: "left",
        moveDist: -100,
        holdPos: "sasquatch",
        keyState: false
    },
    D: {
        src: "/images/sassy-sprite-right.png",

        moveClass: "move-right",
        moveDirection: "left",
        moveDist: +100,
        holdPos: "sasquatch",
        keyState: false
    },
    W: {
        src: "/images/sassy-sprite-up-right.png",

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: -100,
        holdPos: "sasquatch",
        keyState: false

    },
    S: {
        src: "/images/sassy-sprite-up-left.png",

        moveClass: "move-down",
        moveDirection: "top",
        moveDist: +100,
        holdPos: "sasquatch",
        keyState: false
    },
    moveStand: {
        src: "/images/lyric-stand.png",

        moveClass: "move-stand",
        holdPos: "human",
        keyState: false
    },
    moveMethod: function (keyPressed, hitBox_ID, sprite_holder) {

        if (this[keyPressed].keyState === false) {

            let spriteHolder = document.querySelector(`.${sprite_holder}`);
            let moveBox = document.getElementById(hitBox_ID);
            let hitBox_bg = moveBox.childNodes[1];
            let rect = spriteHolder.getBoundingClientRect();
            let loc = [this[keyPressed].moveDirection];
    
            console.log(`${rect[loc]} + ${this[keyPressed].moveDist}`);
            console.log(rect[loc] + this[keyPressed].moveDist);
    
            spriteHolder.style[loc] = `${rect[loc] + this[keyPressed].moveDist}px`;
    
            this.removeClass(spriteHolder);
    
            // needed to reset animation:
            void spriteHolder.offsetWidth;
    
            spriteHolder.style.backgroundImage = `url("${this[keyPressed].src}")`;
            spriteHolder.classList.add(this[keyPressed].moveClass);
            spriteHolder.classList.add(this[keyPressed].holdPos);
    
            let animationClass = document.querySelector(".transform-holder");
            console.log("animationClass");
            console.log(animationClass);
    
            animationClass.onanimationend = () => {
                this.removeClass(animationClass);
                console.log(`Animation iteration has ended!`);
    
                this.addClass(animationClass);
                animationClass.style.backgroundImage = `url("${this.moveStand.src}")`;
            };
    
            // animationClass.addEventListener('animationiteration', this.nextAnimation(animationClass));

        } else {
            console.log("this will always fire!");
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
        );
    },
    addClass: function (element) {
        element.classList.add(
            "move-stand"
        );
    },
    nextAnimation: function (spriteHolder) {
        console.log("Finished animation!");

        animationClass.onanimationiteration

        // // needed to reset animation:
        // void spriteHolder.offsetWidth;

        // this.removeClass(spriteHolder);
        // this.addClass(spriteHolder);
        console.log(event);
    },
    changeState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);

        this[keyPressed].keyState = bool;
        // console.log(this[keyPressed].keyState);
    }
};

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:
const moveSpriteDiv = function (keyPressed, sprite_ID, sprite_holder, eventType) {
    if (eventType === "keydown") {
        moveAndDisplay.moveMethod(keyPressed, sprite_ID, sprite_holder);
        
        let bool = true;
        moveAndDisplay.changeState(keyPressed, bool);
        // return;
    } else {
        let bool = false;
        moveAndDisplay.changeState(keyPressed, bool);
    }
};

const btnDownUp = function (event) {
    // let shapeshift = isShifted(); TODO: add this method to object moveAndDisplay
    console.log(`shapeshift bool: ${shapeshift}`);
    let keyPressed = event.key;

    if (shapeshift) {
        keyPressed = keyPressed.toUpperCase();
    } else {
        keyPressed = keyPressed.toLowerCase();
    };

    let eventType = event.type;

    if (keyPressed == "w" || keyPressed == "a" || keyPressed == "s" || keyPressed == "d" || keyPressed == "W" || keyPressed == "A" || keyPressed == "S" || keyPressed == "D" || keyPressed == "l") {
        let sprite_holder = "transform-holder";
        let sprite_ID = "hit-box-lyric"; // TODO: userinput only / reuse function with diff parameters?
        return moveSpriteDiv(keyPressed, sprite_ID, sprite_holder, eventType); // dispalyMove(): separate func?
    };
};

document.addEventListener("keydown", btnDownUp, false);
document.addEventListener("keyup", btnDownUp, false);