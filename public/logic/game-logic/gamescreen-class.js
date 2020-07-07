class Game_Screen {
    constructor(id, size) {
        this.id = id;
        this.size = size;
        this.elem = this.getElem(this.id);
        this.dimensions = this.get_Coords(this.elem);
        this.left = this.dimensions.left;
        this.top = this.dimensions.top;
        this.right = this.dimensions.right;
        this.bottom = this.dimensions.bottom;
        this.width = this.dimensions.width;
        this.height = this.dimensions.height;
    };

    getElem(id) {
        let element = document.querySelector(`#${id}`);
        return element;
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

    updatePos() {
            // this.dimensions = this.get_Coords(this.elem);
            this.update_Coords(this.elem);
    };
};

module.exports = Game_Screen;