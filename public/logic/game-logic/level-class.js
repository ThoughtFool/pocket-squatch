class Level {
    constructor(name, level, ground, wall) {
        this.name = name;
        this.level = level;
        this.ground = ground;
        this.wall = wall;
        this.blueprint = this.getBuild();
    };

    getBuild () {
        let blueprint = "get_JSON_URL" //querystring for API?
        return blueprint;
    };

    build() {
        // html: createElement() and append();
    };
};

module.exports = Level;