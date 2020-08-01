const enemyLevelData = {
// class enemyLevelData {

    spawn: { // spawn holder of generated enemies
        level: null,
        total: null,
        horde: [],
        loc: []
    },

    enemyType: require("./enemy-type-data"),

    getLoc: function () {
        return this.enemyType[this.spawn.level].pos;
    },

    randType: function () {
        let randNum = Math.floor(Math.random() * this.enemyType[this.spawn.level].type.length);
        console.log("randNum:");
        console.log(randNum);
        return this.enemyType[this.spawn.level].type[randNum];
    },

    loop: function (level, numberOfEnemies) {
        this.spawn.level = level;
        this.spawn.total = numberOfEnemies;
        this.spawn.loc = this.getLoc();
        for (let i = 0; i < numberOfEnemies; i++) {

            let newEnemy = {
                coords: {
                    left: this.spawn.loc[i].x,
                    top: this.spawn.loc[i].y,
                    width: 50,
                    height: 50,
                    right: this.left + this.width
                },
                elemType: "div",
                className: "enemy",
                class_moveType: this.randType(),
                id: `enemy-${i}`

                /////////////////////////////
                // id: `enemy-${i}`,
                // friendOrFoe: "foe",
                // spriteType: "enemy",
                // enemyType: this.randType(),

                // create method to place enemy on space based on map/blueprint options:
                // xPos: this.spawn.loc[i].x,
                // yPos: this.spawn.loc[i].y,

                // size: this.spawn.size, // randomSize
                // dx: this.spawn.dx,
                // dy: this.spawn.dy,
                // onGround: true,
                // jumpPower: this.enemyType.jumpPower,
                // moveSpeed: this.enemyType.moveSpeed
            };

            this.spawn.horde.push(newEnemy);
        };
        return this.spawn.horde;
    }
};

module.exports = enemyLevelData;