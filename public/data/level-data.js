const levelData = {
    
    loop: function (blueprint) {
        for (let i = 0; i < blueprint.length; i++) {
            // insert loop from "block builder folder"
        };
    },
    
    build: function (level) {
        this.loop(this.data[level].blueprint);
    },

    data: {

        01: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        02: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        03: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        04: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        05: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        06: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        07: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        07: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        09: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
        10: {
            blueprint: [],
            name: "insert cool name here",
            enemy: {}
        },
    }
};

module.exports = levelData;