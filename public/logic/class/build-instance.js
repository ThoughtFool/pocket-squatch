class Build_Instance {
    constructor(action_types, player_data, sprite_data, level_data, enemy_data, game_data, populate_level_enemy_data, gameroom_data, myGamescreen, testSprite) {
        this.action_types = action_types;  // methods for performing actions/moves
        this.player_data = player_data; // levels achieved
        this.sprite_data = sprite_data; // object: hero info/stats
        this.level_data = level_data; // blueprint, enemies, level name
        this.enemy_data = enemy_data; // object: current enemy holder
        this.game_data = game_data; // object: current timer and points
        this.populate_level_enemy_data = populate_level_enemy_data; // place enemies pos and choose based on level
        this.gameroom_data = gameroom_data; // build-out: current game area

        this.myGamescreen = myGamescreen;
        this.testSprite = testSprite;
    };

    // TODO: combine files: level-data and enemy-type-data
    set_gameroom() {
        this.gameroom_data.player = this.sprite_data;
        this.gameroom_data.enemy = this.enemy_data; // TODO: remove this memory redundancy
        this.gameroom_data.currentLevel = this.player_data.currentLevel;
        this.level_data.build(this.gameroom_data.currentLevel); // TODO: add to gamescreen method
        this.populate_level_enemy_data.loop(this.gameroom_data.currentLevel, this.level_data.data[this.level_data.currentLevelId[this.gameroom_data.currentLevel]].enemyTot);
        this.gameroom_data.enemy = this.populate_level_enemy_data.spawn;

        return this.gameroom_data;
    };


};

module.exports = Build_Instance;