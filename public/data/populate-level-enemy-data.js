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
                id: `enemy-${i}`,
                friendOrFoe: "foe",
                spriteType: "enemy",
                enemyType: this.randType(),

                // create method to place enemy on space based on map/blueprint options:
                xPos: this.spawn.loc[i].x,
                yPos: this.spawn.loc[i].y
            };

            this.spawn.horde.push(newEnemy);
        };
        return this.spawn.horde;
    }
};

module.exports = enemyLevelData;