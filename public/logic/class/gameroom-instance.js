// TODO: combine files: level-data and enemy-type-data

class Gameroom_Instance {
    constructor(player_data, game_data) {
        this.player = player_data;
        this.currentLevel = this.player.currentLevel;
        this.data = game_data;
    };
};

module.exports = Gameroom_Instance;