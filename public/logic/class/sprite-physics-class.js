class Sprite_Physics {
    constructor(gamescreen_ID, ground_className, friendOrFoe, id, velocity, gravity, friction, xPos, yPos) {
    // constructor(gamescreen_ID, ground_ID, friendOrFoe, id, velocity, gravity, friction, xPos, yPos) {
        this.gamescreen_ID = gamescreen_ID;
        // this.ground_ID = ground_ID;
        this.friendOrFoe = friendOrFoe; // TODO: Move to placeSprite method in gamelevel class
        this.id = id;
        // this.id = id;
        this.velocity = velocity; // "dy"

        // pos used to position sprite that has yet to be placed:
        this.xPos = xPos;
        this.yPos = yPos;

        // game elements:
        this.elem = this.getElem(this.id);
        this.dimensions = this.get_Coords(this.elem);
        this.left = this.dimensions.left;
        this.top = this.dimensions.top;
        this.bottom = this.dimensions.bottom;
        this.width = this.dimensions.width;
        this.height = this.dimensions.height;
        
        this.gamescreenElem = this.getElem(this.gamescreen_ID);
        this.gamescreenElem_Coords = this.get_Coords(this.gamescreenElem);
        
        // this.groundElem = this.getElem(this.ground_ID);
        // this.groundElem_Coords = this.get_Coords(this.groundElem);

        // Testing for multiple elements (ie: ground, wall, enemy);
        this.ground_className = ground_className;
        // this.ground_className = "ground";
        this.groundCoordsArray = [];
        this.allGroundElems = this.getAllElems(this.ground_className);
        this.allGroundElems_Coords = this.get_All_Coords(this.allGroundElems);
        this.groundElem_Now = this.eval_All_Coords(this.allGroundElems);
        // setTimeout(() => {
        //     let testVal = this.eval_All_Coords(this.allGroundElems);
        //     alert(testVal);
        //     return testVal;
        // }, 1000);
            
        // this.testElem = this.testFunc(this.groundElem_Now);
        
        this.gravity = gravity;
        this.friction = friction;
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

    get_All_Coords(elements) {
        for (let i = 0; i < elements.length; i++) {
            let coords = elements[i].getBoundingClientRect();
            this.groundCoordsArray.push(coords);
        };
        return this.groundCoordsArray;
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
        // this.elem.style.left = `${this.left}px`;
        // this.elem.style.right = `${this.right}px`;
        // this.elem.style.bottom = `${this.bottom}px`;
        // this.elem.style.width = `${this.width}px`;
        // this.elem.style.height = `${this.height}px`;

        // console.log("udpateDisplay method fires");
    };

    updatePos() {
        // this.dimensions = this.get_Coords(this.elem);
        this.update_Coords(this.elem);

        if (this.bottom > this.groundElem_Coords.top) {
            // if (this.top + this.height > this.groundElem_Coords.top) {
            this.velocity = -this.velocity * this.friction;
            // console.log("this.velocity");
            // console.log(this.velocity);
        } else {
            this.velocity += this.gravity;
        };

        this.top += this.velocity; // add velocity to sprite
        // console.log("this.top");
        // console.log(this.top);

        this.updateDisplay();
    };

    isBelow (element01_coords, element02_coords) {
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

    // createElement()
    // append()
};

module.exports = Sprite_Physics;