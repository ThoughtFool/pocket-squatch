class Build_Instance {
    constructor(action_types, player_data, sprite_data, level_data, enemy_data, game_data, myGamescreen, testSprite) {
        this.action_types = action_types;
        this.player_data = player_data;
        this.sprite_data = sprite_data;
        this.level_data = level_data;
        this.enemy_data = enemy_data;
        this.game_data = game_data; // TODO: timer, points, etc.

        this.myGamescreen = myGamescreen;
        this.testSprite = testSprite;
    };

    getGameData (gameData) {
        console.log("getting this gameData:");
        console.log(gameData);
        return gameData;
    };
};

module.exports = Build_Instance;