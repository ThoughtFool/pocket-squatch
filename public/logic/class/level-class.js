class Level {
    constructor(name, level, ground, wall, enemy) {
        this.name = name;
        this.level = level;
        this.ground = ground;
        this.wall = wall;
        this.enemy = enemy;
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