const levelData = {

    loop: function (blueprint) {
        for (let i = 0; i < blueprint.length; i++) {
            // TODO: insert loop from "block-builder folder"
        };
        console.log(blueprint);
    },

    build: function (level) {
        // this.loop(this.data[level].blueprint);
        return this.data[level];
    },

    data: {

        01: { // TODO: Add method to build level from array:
            blueprint: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 4, 6, 2, 2, 2, 1,
                1, 6, 6, 6, 4, 6, 2, 2, 2, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 6, 4, 5, 0, 1,
                1, 6, 6, 6, 6, 4, 4, 5, 0, 1,
                1, 6, 6, 6, 4, 4, 4, 5, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            name: "Blue Valley Mountains",
            enemy: {},
            enemyTot: 4,
            gravity: 0.2, // gravity per frame
            drag: 0.999,
            groundDrag: 0.9, // ground movement
            ground: 150
        },
        02: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        03: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        04: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        05: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        06: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        07: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        07: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        09: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
        10: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        },
    }
};

module.exports = levelData;