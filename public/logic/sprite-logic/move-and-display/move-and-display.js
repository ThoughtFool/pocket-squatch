const space_key = require("../../../data/instance-data");
const gamespace = require("../../../data/game-space");

const moveAndDisplay = {

    setBeingType: function (newType) {
        return (space_key != null ? gamespace.data[space_key.index].gameInstance.player.sprite.beingType = newType : "human");
    },
    getBeingType: function () {
        return (space_key.index != null ? gamespace.data[space_key.index].gameInstance.player.sprite.beingType : "human");
    },
    update_Pos: function () {
        // gamespace.data[space_key.index].gameInstance.player.sprite.updatePos();
    },
    37: {
        "human": {
            height: "150px",
            width: "150px",
            src: "/images/human-walk-left.png",
            moveClass: "move-left",
            moveDirection: "left",
            moveDist: -250,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            height: "300px",
            width: "300px",
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
            height: "150px",
            width: "150px",
            src: "/images/human-walk-right.png",
            moveClass: "move-right",
            moveDirection: "left",
            moveDist: 250,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            height: "300px",
            width: "300px",
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
            height: "150px",
            width: "150px",
            src: "/images/lyric-jump-right.png",
            moveClass: "move-up",
            moveDirection: "top",
            moveDist: -250,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            height: "300px",
            width: "300px",
            src: "/images/sassy-jump-right.png",
            moveClass: "jump-up",
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
            height: "150px",
            width: "150px",
            src: "/images/lyric-jump-left.png",
            moveClass: "move-down",
            moveDirection: "top",
            moveDist: 250,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            height: "300px",
            width: "300px",
            src: "/images/sassy-jump-left.png",
            moveClass: "jump-down",
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
    32: {
        "human": {
            height: "150px",
            width: "150px",
            src: "/images/liftoff.png",
            moveClass: "liftoff",
            moveDirection: "top",
            moveDist: -250,
            holdPos: "human",
            keyState: false,

        },
        "sasquatch": {
            height: "300px",
            width: "300px",
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
    idleMoveType: {
        "human": {
            height: "150px",
            width: "150px",
            src: "/images/lyric-stand.png",

            moveClass: "move-dance",
            holdPos: "human",
            keyState: false,
            step_counter: 0,
            preMove_pos: null
        },
        "sasquatch": {
            height: "300px",
            width: "300px",
            src: "/images/idle-squatch.png",

            moveClass: "move-stand",
            // moveClass: "idle-squatch",
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null
        },
        "stone queen": {
            src: "/images/lyric-fly-right.png",

            moveClass: "move-fly-right",
            holdPos: "stone queen hybrid",
            keyState: false,
            step_counter: 0,
            preMove_pos: null
        }
    },
    therianthropyType: {
        "human": {
            height: "300px",
            width: "300px",
            src: "/images/human-transform.png",

            moveClass: "move-day-shift",
            holdPos: "human",
            keyState: false,
            step_counter: 0,
            preMove_pos: null
        },
        "sasquatch": {
            height: "300px",
            width: "300px",
            src: "/images/sassy-transform.png",

            moveClass: "move-day-shift",
            // moveClass: "idle-squatch",
            holdPos: "sasquatch",
            keyState: false,
            step_counter: 0,
            preMove_pos: null
        }
    },
    moveDance: {
        src: "/images/lyric-stand.png",

        moveClass: "move-dance",
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
    moveMethod: function (keyPressed, spriteHolderElem, isSummoned) {
        // alert(keyPressed);
        // moveMethod: function (keyPressed, spriteHolderElem) {
        // TODO: break this method up into smaller, more modular methods
        // let spriteHolderElem = document.querySelector("#sprite-holder");

        let beingType = this.getBeingType();
        // let ClientRect = spriteHolderElem.getBoundingClientRect();
        // let topOrLeft = [this[keyPressed][beingType].moveDirection];

        // console.log(`${ClientRect[topOrLeft]} + ${this[keyPressed][beingType].moveDist} = ${ClientRect[topOrLeft] + this[keyPressed][beingType].moveDist}`);

        // create incrementer:
        // this.animateStep(
        //     spriteHolderElem,
        //     keyPressed,
        //     // topOrLeft,
        //     // (ClientRect[topOrLeft] + this[keyPressed][beingType].moveDist),
        //     // this[keyPressed][beingType].moveDist
        // );

        console.log("spriteHolderElem");
        console.log(spriteHolderElem);

        this.removeClass(spriteHolderElem);

        // reset animation:
        // void spriteHolderElem.offsetWidth;
        // if (this[keyPressed][beingType] === "sasquatch") {

        //     this.shiftLoc(spriteHolderElem);
        // };

        spriteHolderElem.style.backgroundImage = `url("${this[keyPressed][beingType].src}")`;
        spriteHolderElem.classList.add(this[keyPressed][beingType].moveClass);
        // spriteHolderElem.style.height = `${this[keyPressed][beingType].height}`;
        // spriteHolderElem.style.width = `${this[keyPressed][beingType].width}`;


        this.transform(spriteHolderElem);
    },
    shiftLoc: function (spriteHolderElem, newSize, beingType) {

        let spriteShiftRect = spriteHolderElem.getBoundingClientRect();

        if (beingType === "sasquatch") {

            let shiftleft = newSize / 4;
            let shiftTop = newSize / 2;

            spriteHolderElem.style.left = `${spriteShiftRect.left - shiftleft}px`;
            spriteHolderElem.style.top = `${spriteShiftRect.top - shiftTop}px`;

        } else {

            let shiftleft = newSize / 2;
            let shiftTop = newSize;

            spriteHolderElem.style.left = `${spriteShiftRect.left + shiftleft}px`;
            spriteHolderElem.style.top = `${spriteShiftRect.top + shiftTop}px`;
        };

        this.resize(spriteHolderElem, newSize);
    },
    resize: function (spriteHolderElem, newSize) {

        spriteHolderElem.style.height = `${newSize}px`;
        spriteHolderElem.style.width = `${newSize}px`;
    },
    idleShift: function (spriteHolderElem) {

        let beingType = this.getBeingType();

        this.removeClass(spriteHolderElem);

        spriteHolderElem.style.backgroundImage = `url("${this.idleMoveType[beingType].src}")`;
        spriteHolderElem.classList.add(this.idleMoveType[beingType].moveClass);
        // spriteHolderElem.style.height = `${this.idleMoveType[beingType].height}`;
        // spriteHolderElem.style.width = `${this.idleMoveType[beingType].width}`;

        this.transform(spriteHolderElem);
    },
    therianthropy: function (spriteHolderElem) {

        let beingType = this.getBeingType();

        this.removeClass(spriteHolderElem);

        spriteHolderElem.style.backgroundImage = `url("${this.therianthropyType[beingType].src}")`;
        spriteHolderElem.classList.add(this.therianthropyType[beingType].moveClass);
        // spriteHolderElem.style.height = `${this.idleMoveType[beingType].height}`;
        // spriteHolderElem.style.width = `${this.idleMoveType[beingType].width}`;

        this.transform(spriteHolderElem);
    },
    relativeGridResizeFunc: function (beingType) {

        let viewportHeight = document.documentElement.clientHeight;
        // let viewportWidth = document.documentElement.clientWidth;

        // let myGrid = document.getElementById("my-grid");
        // let myGridCoords = myGrid.getBoundingClientRect();
        // let myGridHeight = myGridCoords.height;

        let myGridHeight = viewportHeight * 1.25;
        // let myGridWidth = myGridCoords.width;
        let spriteSizePercent;
        // --my-grid-size: calc(var(--viewport-height) * 1.25); (CSS file)

        console.log("myGridHeight:");
        console.log(myGridHeight);
        // console.log("myGridWidth:");
        // console.log(myGridWidth);

        // if (myGridHeight > myGridWidth) {
        //     console.log("orientation: portrait");
        // } else {
        //     console.log("orientation: landscape");
        // };

        if (beingType === "sasquatch") {
            spriteSizePercent = .20;

        } else {
            spriteSizePercent = .10;
        };

        let adjustedSize = myGridHeight * spriteSizePercent;

        console.info("adjustedSize");
        console.info(adjustedSize);

        return adjustedSize;

    },
    removeClass: function (element) {
        console.log("element");
        console.log(element);

        element.classList.remove(
            "move-day-shift",
            "move-stand",
            "move-dance",
            "move-left",
            "move-right",
            "move-up",
            "move-down",
            "jump-up",
            "jump-down",
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
    getKeyState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][this.getBeingType()].keyState = bool;

    },
    changeKeyState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][this.getBeingType()].keyState = bool;

    },
    // animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {
    //     // this.keyPressed = keyPressed;
    //     let moveType;

    //     if (keyPressed === 38 && this.getBeingType() != "stone queen") {
    //         moveType = "jump up";
    //     } else {
    //         moveType = null;
    //     };

    // this.animationLoop(spriteHolderElem, this[keyPressed][this.getBeingType()].moveDist, currentPos_TopOrLeft, moveType);

    // },
    animationLoop: require("./methods/animation-loop"),

    transform: function (spriteHolderElem,) {

        spriteHolderElem.onanimationend = () => {

            let beingType = this.getBeingType();
            console.log(`Animation iteration has ended!`);

            // if (spriteHolderElem.classList.contains("move-day-shift") && beingType === "human") {
            //     this.removeClass(spriteHolderElem);
            //     spriteHolderElem.style.backgroundImage = `url("${this.moveDance.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            // } else if (spriteHolderElem.classList.contains("move-day-shift") && beingType === "sasquatch") {
            //     this.removeClass(spriteHolderElem);
            //     spriteHolderElem.style.backgroundImage = `url("${this.idleSquatch.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            // } else 
            if (spriteHolderElem.classList.contains("liftoff") && beingType === "human") {
                // this.addClass(spriteHolderElem, "divebomb"); TODO::?
                this.removeClass(spriteHolderElem);
                this.setBeingType("stone queen");
                this.addClass(spriteHolderElem, "move-fly-left");
                //change to larger size box:

                // this.shiftLoc(spriteHolderElem, 300);

                spriteHolderElem.style.backgroundImage = `url("${this.moveFly.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.


            } else if (spriteHolderElem.classList.contains("landing") && beingType != "sasquatch") {
                this.removeClass(spriteHolderElem);
                this.setBeingType("human");
                this.addClass(spriteHolderElem, "move-dance");

                // this.shiftLoc(spriteHolderElem, 150);

                spriteHolderElem.style.backgroundImage = `url("${this.moveDance.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.


            } else if (spriteHolderElem.classList.contains("move-fly-left") && beingType === "stone queen" || spriteHolderElem.classList.contains("move-fly-right") && beingType === "stone queen") {
                // TODO: countdown clock/timer only allows to use stone queen's powers. needs recharging
                console.log("You have the power of the stone queen!");

            } else { // return to idle sprite "standing" animation:

                this.removeClass(spriteHolderElem);
                let beingType = this.getBeingType();

                // TODO: merge this with idleMoveType and idleShift method:

                if (beingType === "human") {
                    // TODO: transform: if flying while transformed to sasquatch, then falls to ground (spritesheet fall and laying on ground and getting up):
                    // this.shiftLoc(spriteHolderElem, 150);

                    spriteHolderElem.style.backgroundImage = `url("${this.moveDance.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.
                    this.addClass(spriteHolderElem, "move-dance");

                } else if (beingType === "sasquatch") {
                    // this.shiftLoc(spriteHolderElem, 300);

                    spriteHolderElem.style.backgroundImage = `url("${this.idleSquatch.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.
                    this.addClass(spriteHolderElem, "move-stand");

                };

                // this.addClass(spriteHolderElem, "move-stand");

            };
        };
    }
};

module.exports = moveAndDisplay;