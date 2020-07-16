const keyPress_handler = require("../sprite-logic/client/keypress-handler");
const gamespace = require("../../data/game-space"); // game space (holder)
const space_key = require("../../data/instance-data");

class Sprite_Physics {
    constructor(gamescreen_ID, obstacleObject, friendOrFoe, id) { // wall_className
        // constructor(gamescreen_ID, ground_ID, friendOrFoe, id, velocity, gravity, friction, xPos, yPos) {
        this.gamescreen_ID = gamescreen_ID;
        // this.ground_ID = ground_ID;
        this.friendOrFoe = friendOrFoe; // TODO: Move to placeSprite method in gamelevel class
        this.id = id;

        // pos used to position sprite that has yet to be placed:
        // this.xPos = xPos;
        // this.yPos = yPos;

        // game elements:
        this.elem = this.getElem(this.id);
        this.dimensions = this.get_Coords(this.elem);
        this.left = this.dimensions.left;
        this.top = this.dimensions.top;
        this.bottom = this.dimensions.bottom;
        this.width = this.dimensions.width;
        this.height = this.dimensions.height;
        this.size = 20;
        this.powerRingColor = "blue";
        this.dx = 0;
        this.velocity = 0; // "dy"
        this.onGround = true;
        this.jumpPower = -10;
        this.moveSpeed = 10;
        // this.gravity = gravity;
        // this.friction = friction;

        // ******************************************************************************
        this.gamescreenElem = this.getElem(this.gamescreen_ID);
        this.gamescreenElem_Coords = this.get_Coords(this.gamescreenElem);
        // ******************************************************************************

        // Testing for multiple ground elements (ie: ground, wall, enemy);
        this.ground_className = obstacleObject.ground_className;
        this.groundCoordsArray = [];
        this.allGroundElems = this.getAllElems(this.ground_className);
        this.allGroundElems_Coords = this.get_All_Coords(this.allGroundElems);
        this.groundElem_Now = this.eval_All_Coords(this.allGroundElems);
        this.groundElem_Coords = this.get_Coords(this.groundElem_Now);

        // ******************************************************************************

        // Testing for multiple wall elements (ie: ground, wall, enemy);
        this.wall_className = obstacleObject.wall_className;
        this.wallCoordsArray = [];
        this.allWallElems = this.getAllElems(this.wall_className);
        this.wallElemArray = this.getElemArray(this.allWallElems);
        // this.allWallElems_Coords = this.get_All_Coords(this.allWallElems);
        // this.wallElem_Now = this.eval_All_Coords(this.allWallElems);
        // this.wallElem_Coords = this.get_Coords(this.wallElem_Now);

        // ******************************************************************************

        // // Testing for multiple enemy elements (ie: ground, wall, enemy);
        // this.enemy_className = obstacleObject.enemy_className;
        // this.enemyCoordsArray = [];
        // this.allEnemyElems = this.getAllElems(this.enemy_className);
        // this.allEnemyElems_Coords = this.get_All_Coords(this.allEnemyElems);
        // this.enemyElem_Now = this.eval_All_Coords(this.allEnemyElems);
        // this.enemyElem_Coords = this.get_Coords(this.enemyElem_Now);

        // // ******************************************************************************

        // // Testing for multiple powerup elements (ie: ground, wall, powerup);
        // this.powerup_className = obstacleObject.powerup_className;
        // this.powerupCoordsArray = [];
        // this.allPowerupElems = this.getAllElems(this.powerup_className);
        // this.allPowerupElems_Coords = this.get_All_Coords(this.allPowerupElems);
        // this.powerupElem_Now = this.eval_All_Coords(this.allPowerupElems);
        // this.powerupElem_Coords = this.get_Coords(this.powerupElem_Now);

        // ******************************************************************************
    };

    getElem(id) {
        let element = document.querySelector(`#${id}`);
        return element;
    };

    getAllElems(className) {
        let elements = document.querySelectorAll(`.${className}`);
        return elements;
    };

    getCoords() {
        return this.elem.getBoundingClientRect();
    };

    get_Coords(element) {
        return element.getBoundingClientRect();
    };

    getElemArray(elements) {
        let coordsArray = [];
        for (let i = 0; i < elements.length; i++) {
            let coords = elements[i];
            coordsArray.push(coords);
        };
        return coordsArray;
    };

    get_All_Coords(elements) {
        let coordsArray = [];
        for (let i = 0; i < elements.length; i++) {
            let coords = elements[i].getBoundingClientRect();
            coordsArray.push(coords);
            // this.groundCoordsArray.push(coords);
        };
        return coordsArray;
        // return this.groundCoordsArray;
    };

    testFunc(myTestVal) {
        console.log(myTestVal);
        alert(myTestVal);
    };


    // TODO: take in additional argument to determine which array to push to (make method reusable with wall and enemy);
    eval_All_Coords(elements) {
        for (let i = 0; i < elements.length; i++) {
            let sprite_coords = this.elem.getBoundingClientRect();
            let ground_coords = elements[i].getBoundingClientRect();
            console.log("ground_coords:");
            console.log(ground_coords);

            this.groundCoordsArray.push(ground_coords);
            let bool = this.isBelow(sprite_coords, ground_coords);
            console.log("bool:");
            console.log(bool);

            if (bool) {
                console.log("elements[i].id:");
                console.log(elements[i].id);
                return this.groundElem_Now = this.getElem(elements[i].id);
            };
        };
    };

    update_Coords(elem) {
        this.dimensions = this.get_Coords(elem);

        this.left = this.dimensions.left;
        this.top = this.dimensions.top;
        this.right = this.dimensions.right;
        this.bottom = this.dimensions.bottom;
        this.width = this.dimensions.width;
        this.height = this.dimensions.height;
    };

    updateDisplay() {

        this.elem.style.top = `${this.top}px`;
        this.elem.style.left = `${this.left}px`;
        // this.elem.style.right = `${this.right}px`;
        // this.elem.style.bottom = `${this.bottom}px`;
        // this.elem.style.width = `${this.width}px`; // TODO: flattened by "Dew-Drops"?
        // this.elem.style.height = `${this.height}px`; // TODO: shrinks when defeated?
    };

    // ******************************************************************************
    updatePos(world) {
        this.update_Coords(this.elem);

        // react to state in keyPress_handler:
        if (keyPress_handler.up && this.onGround) {
            this.velocity = this.jumpPower;
        };
        if (keyPress_handler.left) {
            this.dx = -this.moveSpeed;
        };
        if (keyPress_handler.right) {
            this.dx = this.moveSpeed;
        };

        // ******************************************************************************
        this.velocity += world.gravity;
        this.velocity *= world.drag;
        this.dx *= this.onGround ? world.groundDrag : world.drag;
        this.left += this.dx;
        this.top += this.velocity;
        // ******************************************************************************

        if (this.top + this.height >= (this.groundElem_Coords.top)) {
            this.top = (this.groundElem_Coords.top - this.height);
            this.velocity = 0;
            this.onGround = true;
        } else {
            this.onGround = false;
        };
        // ******************************************************************************

        if (this.left > this.gamescreenElem_Coords.width) {
            this.left -= this.gamescreenElem_Coords.width;
        } else if (this.left + this.size < 0) {
            this.left += this.gamescreenElem_Coords.width;
        };
        // ******************************************************************************

        this.spriteTouch(this.wallElemArray);

        // if (result) {

        // } else {
        // this.updateDisplay();
        // };
    };

    spriteTouch(elem_array) {
        // this.update_Coords(this.elem);
        let result = false;

        // if (keyPress_handler.up && this.onGround) {
        //     this.velocity = this.jumpPower;
        //         keyAction = "jump";

        // };
        // if (keyPress_handler.left) {
        //     this.dx = -this.moveSpeed;
        //         keyAction = "left";

        // };
        // if (keyPress_handler.right) {
        //     this.dx = this.moveSpeed;
        //         keyAction = "right";

        // };
        let elem_coords

        elem_array.forEach(elemToCheck => {
            elem_coords = elemToCheck.getBoundingClientRect();
            // alert(`${this.left} < ${elem_coords.right}?`);

            if (
                this.left < elem_coords.right &&
                this.right > elem_coords.left &&
                this.top < elem_coords.bottom &&
                this.bottom > elem_coords.top
            ) {
                if (this.left + this.width > elem_coords.left && this.left + (this.width / 2) < elem_coords.left &&
                    this.top + this.height > elem_coords.top && this.top + (this.height / 2) < elem_coords.top) { // bottom-right side collison
                    // alert(`bottom-right side collision: this.left: ${this.left}, this.width: ${this.width}, elem_coords.left: ${elem_coords.left}`);
                    this.left = elem_coords.left - this.width;

                } else if (this.left < elem_coords.right && this.left + (this.width / 2) < elem_coords.right &&
                    this.top + this.height > elem_coords.top && this.top + (this.height / 2) < elem_coords.top) { // bottom-left side collison
                    // alert(`bottom-left side collision:`);
                    this.left = elem_coords.right;

                } else if (this.left < elem_coords.right && this.left + (this.width / 2) > elem_coords.right &&
                    this.top < elem_coords.bottom && this.top + (this.height / 2) > elem_coords.bottom) { // top-left side collison
                    // alert(`top-left side collision: this.left: ${this.left}, this.right: ${this.right}, elem_coords.right: ${elem_coords.right}`);
                    this.top = elem_coords.top - this.height;

                } else if (this.left + this.width > elem_coords.left && this.left + (this.width / 2) < elem_coords.left &&
                    this.top < elem_coords.bottom && this.top + (this.height / 2) > elem_coords.bottom) { // top-right side collison
                    // alert(`top-right side collision:`);
                    this.top = elem_coords.top - this.height;


                } else {
                    alert(`
                        ${this.left} < ${elem_coords.right} &&
                        ${this.right} > ${elem_coords.left} &&
                        ${this.top} < ${elem_coords.bottom} &&
                        ${this.bottom} > ${elem_coords.top}
                    `);
                };
                result = true;
            };
        });


        if (result) {
            // if(this.getDist(this.left, this.top, elem_coords.left, elem_coords.top) <
            //     elem_coords.width / 2 + this.width / 2) {
            //         this.right = elem_coords.left;
            // this.updateDisplay();
            this.updateDisplay();

        } else {
            this.updateDisplay();
        };
    };

    getDist(left1, top1, spriteLeft, spriteTop) {
        let leftDist = spriteLeft - left1;
        let topDist = spriteTop - top1;
        return Math.sqrt(Math.pow(leftDist, 2) + Math.pow(topDist, 2));
    };

    isBelow(element01_coords, element02_coords) {
        console.log("element01_coords.left:");
        console.log(element01_coords.left);

        console.log("element01_coords.right:");
        console.log(element01_coords.right);

        let spriteMedian = (element01_coords.left + element01_coords.right) / 2;
        console.log("spriteMedian:");
        console.log(spriteMedian);

        if (spriteMedian > element02_coords.left && spriteMedian < element02_coords.right) {
            return true;
        } else {
            return false;

        };
    };

    isBeside(element01_coords, element02_coords) {
        console.log("element01_coords.top:");
        console.log(element01_coords.top);

        console.log("element01_coords.bottom:");
        console.log(element01_coords.bottom);

        let spriteMedian = (element01_coords.top + element01_coords.bottom) / 2;
        console.log("spriteMedian:");
        console.log(spriteMedian);

        if (spriteMedian > element02_coords.top && spriteMedian < element02_coords.bottom) {
            return true;
        } else {
            return false;

        };
    };

    // createElement()
    // append()
};

module.exports = Sprite_Physics;