const levelData = {

    addStampToList: require("../logic/builder/add-stamp"),

    loop_alt: function (blueprint) {
        for (let i = 0; i < blueprint.length; i++) {
            // TODO: insert loop from "block-builder folder"
        };
        console.log(blueprint);
    },

    build: function (level) {
        // this.loop(this.data[level].blueprint);
        return this.data[level];
    },
    loop: function (level, counter) {
        return this.data[level].blueprint[counter];
    },
    userMade_idArr: [],
    saveNew: function (savedLevelArray, newLevelName, mongoID) {
        console.log("mongoID");
        console.log(mongoID);

        // let timeStamp = Date.now();
        let timeStamp = this.addStampToList();
        // console.log("timeStamp");
        // console.log(timeStamp);
        this.userMade_idArr.push({ [timeStamp]: newLevelName });
        this.data[timeStamp] = {
            blueprint: savedLevelArray,
            name: newLevelName,
            enemy: {},
            enemyTot: 5,
            gravity: 0.2,
            drag: 0.999,
            groundDrag: 0.9,
            ground: 150
        };

        console.log("this");
        console.log(this);
        return this;
    },
    data: {

        01: { // TODO: Add method to build level from array:
            blueprint: [
                1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 5,
                1, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 5,
                1, 6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 6, 5,
                1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 6, 5,
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
        }
    }
};

module.exports = levelData;