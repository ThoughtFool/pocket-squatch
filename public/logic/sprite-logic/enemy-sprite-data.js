const enemy_sprite_Data = {
    position: null,
    getPosition: function (enemyBlock) {
        console.log("this is firing!");
        this.position = enemyBlock.getBoundingClientRect()[this.direction];
        console.log(this.position);
    },
    checkPosition: function () {
        if (this.position != null && this.counter % 5 === 0) {
            this.steps *= -1;
        };
    },
    steps: 50,
    direction: "left",
    counter: 0
};

module.exports = enemy_sprite_Data;