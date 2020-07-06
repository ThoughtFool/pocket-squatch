class Build_Instance {
    constructor(sprite_data, game_data, action_types, level_data, game_timer) {
        this.sprite_data = sprite_data;
        this.game_data = game_data;
        this.action_types = action_types;
        this.level_data = level_data;
        this.game_timer = game_timer;
    };

    getGameData (gameData) {
        console.log("getting this gameData:");
        console.log(gameData);
        return gameData;
    };
};

module.exports = Build_Instance;