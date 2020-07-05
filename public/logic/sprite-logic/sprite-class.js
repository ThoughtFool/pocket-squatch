class Sprite_testPhysics {
    constructor(gamescreen_ID, ground_ID, beingType, id, xPos, yPos, velocity) {
        this.beingType = beingType;
        this.gamescreen_ID = gamescreen_ID;
        this.ground_ID = ground_ID;
        this.id = id;
        this.xPos = xPos;
        this.yPos = yPos;
        this.velocity = velocity; // "dy"
        this.elem = this.getElem(this.id);

        this.gamescreenElem = this.getElem(this.gamescreen_ID);
        this.gamescreenElem_Coords = this.get_Coords(this.gamescreenElem);

        this.groundElem = this.getElem(this.ground_ID);
        this.groundElem_Coords = this.get_Coords(this.groundElem);

        this.dimensions = this.get_Coords(this.elem);
        this.left = this.dimensions.left;
        this.top = this.dimensions.top;
        this.right = this.dimensions.right;
        this.bottom = this.dimensions.bottom;
        this.width = this.dimensions.width;
        this.height = this.dimensions.height;
        this.gravity = 1;
        this.friction = .8;
        // // this.weight = weight;
    };

    getElem(id) {
        let element = document.querySelector(`#${id}`);
        return element;
    };

    getCoords() {
        return this.elem.getBoundingClientRect();
    };

    get_Coords(element) {
        return element.getBoundingClientRect();
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
    // createElement()
    // append()
};

module.exports = Sprite_testPhysics;