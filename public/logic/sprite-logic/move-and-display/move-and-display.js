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
    getKeyState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][this.getBeingType()].keyState = bool;

    },
    changeKeyState: function (keyPressed, bool) {
        console.log(`changeState bool: ${bool}`);
        this[keyPressed][this.getBeingType()].keyState = bool;

    },
    animateStep: function (spriteHolderElem, keyPressed, currentPos_TopOrLeft, newPos, dist, loopSpeed) {
        // this.keyPressed = keyPressed;
        let moveType;

        if (keyPressed === 38 && this.getBeingType() != "stone queen") {
            moveType = "jump up";
        } else {
            moveType = null;
        };

        this.animationLoop(spriteHolderElem, this[keyPressed][this.getBeingType()].moveDist, currentPos_TopOrLeft, moveType);

    },
    animationLoop: require("./methods/animation-loop"),

    transform: function (spriteHolderElem) {

        spriteHolderElem.onanimationend = () => {

            let beingType = this.getBeingType();
            console.log(`Animation iteration has ended!`);

            if (spriteHolderElem.classList.contains("liftoff") && beingType === "human") {
                // this.addClass(spriteHolderElem, "divebomb"); TODO::?
                this.removeClass(spriteHolderElem);
                this.setBeingType("stone queen");
                this.addClass(spriteHolderElem, "move-fly-left");
                spriteHolderElem.style.backgroundImage = `url("${this.moveFly.src}")`; // TODO: create "idle" class for stands, flys, sits, etc.

            } else if (spriteHolderElem.classList.contains("landing") && beingType != "sasquatch") {
                this.removeClass(spriteHolderElem);
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
    }
};

module.exports = moveAndDisplay;