slotFiller = {
    stats_data: require("./stats-data"),
    physics_data: require("./physics-data"),
    transform_data: require("./transform-data"),
    actionTypes: require("./action-types")
};

module.exports = slotFiller;

if (keysDown[K_UP]) {
    if (this.falling == false) {
        this.setImage("characterUp.png");
        this.y -= 5;
        this.falling = true;
        this.addVector(0, 15);
    } // end if
} else {
    checkFalling();
} // end if