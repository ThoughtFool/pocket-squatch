let clientStart = Date.now();
let myTimer = 0;

const clientTimeKeeper = function () {

    let timerSpan = document.querySelector("#timer-span");
    timerSpan.innerHTML = myTimer;

    if (myTimer < 15) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
        };

    } else if (myTimer >= 15 && myTimer < 30) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer === 15) {
            console.log("As a shapeshifter, your transformation begins!");
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
        src: "https://library.kissclipart.com/20180923/khw/kissclipart-weather-wind-and-rain-clipart-rain-wind-weather-ada11640c21dca10.png",
        
        moveClass: "move-left",
        moveDirection: "left",
        moveDist: - 100
    },
    d: {
        src: "https://library.kissclipart.com/20180831/xyw/kissclipart-tornado-weather-drawing-clipart-tornado-drawing-cl-89df09c957b28724.png",
        
        moveClass: "move-right",
        moveDirection: "left",
        moveDist: + 100
    },
    w: {
        src: "https://p7.hiclipart.com/preview/755/64/974/common-raven-t-shirt-drawing-clip-art-raven.jpg",

        moveClass: "move-up",
        moveDirection: "top",
        moveDist: - 100
        
    },
    s: {
        src: "https://w7.pngwing.com/pngs/371/831/png-transparent-silhouette-of-crow-silhouette-bird-american-crow-ravens-3d-animated-animals-photography-monochrome.png",
        
        moveClass: "move-down",
        moveDirection: "top",
        moveDist: + 100
    },
    moveMethod: function (keyPressed, hitBox_ID) {
        let moveBox = document.getElementById(hitBox_ID);
        let hitBox_bg = moveBox.childNodes[1];
        let rect = moveBox.getBoundingClientRect();
        let loc = [this[keyPressed].moveDirection];
        
        moveBox.style[loc] = `${rect[loc] + this[keyPressed].moveDist}px`;

        this.removeClass(hitBox_bg);
        hitBox_bg.style.backgroundImage = `url("${this[keyPressed].src}")`;
        hitBox_bg.classList.add(this[keyPressed].moveClass);
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

// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects:
const moveSpriteDiv = function (keyPressed, sprite_ID) {
    return moveAndDisplay.moveMethod(keyPressed, sprite_ID);
};

const btnPress = function (event) {

    let keyPressed = event.key;
    console.log(keyPressed.toLowerCase());
    keyPressed = keyPressed.toLowerCase()

    if (keyPressed == "w" || keyPressed == "a" || keyPressed == "s" || keyPressed == "d") {
        let sprite_ID = "hit-box-lyric"; // TODO: userinput only / reuse function with diff parameters?
        return moveSpriteDiv(keyPressed, sprite_ID); // dispalyMove(): separate func?
    };
};

document.addEventListener("keypress", btnPress);