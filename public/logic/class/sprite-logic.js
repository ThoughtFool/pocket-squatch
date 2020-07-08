class Sprite {
    constructor(name, health, strength, hasStoneQueen, timeOfDay, actionTypes) {
    // constructor(name, health, strength, hasStoneQueen, timeOfDay, actionTypes, gameData) {
        this.name = name;

        // create a checkStats function depending on beingType type
        this.stats = {
            friend: {
                human: {
                    health: health,
                    strength: strength
                },
                sasquatch: {
                    health: health * 2,
                    strength: strength * 2
                }
            },
            foe: {}
            // foe: this.getGameData(gameData)
            // getData from enemy constructor after "load_level(getEnemySprites(num, level))"
        };

        this.hasStoneQueen = hasStoneQueen;
        this.timeOfDay = timeOfDay; // nightfall feeling sleepy
        this.asleep = this.isAsleep();
        this.beingType = this.transform();
        this.spiritType = ["ghost fox", "cobalt corvid", "scarlet racerunner", "sand lion", "night frost"];
        this.creatureType = ["sasquatch", "yeti", "bigfoot", "abonimable", "swampthing", "sandman"];
        this.locType = [
            "dream-world",
            "real-world",
            "past",
            "present"
        ];
        this.myLocation = this.isWhere();
        this.timezone = ["dreamtime", "realtime"]; // slow vs. fast
        this.actionTypes = actionTypes;
    };

    transform() {
        if (this.hasStoneQueen) {
            console.log("I have the stone queen!");

            if (this.isAsleep()) {
                console.log("I am Sasquatch!");
                return this.beingType = "sasquatch"; // use array to determine type of wildling based on location
            } else {
                console.log(`I am human! My name is ${this.name}.`);
                return this.beingType = "human";
            };
        };
        return;
    };

    isAsleep() {
        if (this.timeOfDay === "daybreak") {
            return this.asleep = false;
        } else if (this.timeOfDay === "nightfall") {
            return this.asleep = true;
        };
    };

    takeAction(moveType) {
        console.log("moveType:");
        console.log(moveType);

        return this[moveType]();
    };

    getStats() {
        return this.stats;
    };

    setStats(friendOrFoe, newData) {
        return (
            this.stats[friendOrFoe][this.beingType] = newData
        );
    };

    // use to get enemy sprite data per level and add to player/Sprite gameroom object:
    getGameData(gameData) {
        console.log("getting this gameData:");
        console.log(gameData);
        return gameData;
    };

    isWhere() {
        return this.locType[Math.floor(Math.random() * this.locType.length)];
    };


    strike() {
        console.log("<<<<<<<<<<<< ATTENTION (strike enemy) >>>>>>>>>>>>");
        console.log(`Enemy health is ${this.stats.foe.enemySprite.health} minus human power: ${this.stats.friend[this.beingType].strength}`);
        console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

        this.stats.foe.enemySprite.health -= this.stats.friend[this.beingType].strength;
        console.log(`Enemy health is NOW: ${this.stats.foe.enemySprite.health}`);

        return this.stats;
    };

    // same as "sleep" (stone-queen needs to rest between actions and returns to stone, while "Lyric" sleeps in arms of queen):
    rest() {
        console.log("You feel rested: +10 health!");
        this.stats.friend[this.beingType].health += 10;
        return this.stats
    };

    // (stone-queen's stone become increasingly fractured, while "Lyric"'s health is returned during sleep cycles):
    isDefeated(gameroom) {
        console.log("Sorry, you have lost this time. Try again?"); // create play again button or auto play level?
        gameroom.losses++;
        return gameroom;
    };

    isWinner(gameroom) {
        console.log("Congrats, you are the winner");
        let currentLevel = parseInt(gameroom.currentLevel);
        gameroom.levels[currentLevel].completed = true;
        gameroom.levels[currentLevel + 1].locked = false;
        gameroom.wins++;
        // console.log(gameroom);
        return gameroom;
    };

    // make this action interchangeable with strike depending on (attacker, defender) parameters:
    receivesDmg() { // strings --> ("friend", "foe")?
        console.log("<<<<<<<<<<<< ATTENTION (receivesDmg) >>>>>>>>>>>>");
        console.log(`Your health is ${this.stats.friend[this.beingType].health} minus enemy power: ${this.stats.foe.enemySprite.strength}`);
        console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

        this.stats.friend[this.beingType].health -= this.stats.foe.enemySprite.strength; //"THIS.enemy?
        console.log(`Enemy health is NOW: ${this.stats.foe.enemySprite.health}`);
        return this.stats;

    };

    receivesHealth() { // strings --> ("friend", "foe")?
        let powerBonus = Math.floor(this.stats.friend[this.beingType].strength / 4);

        console.log("<<<<<<<<<<<< ATTENTION (receivesHealth) >>>>>>>>>>>>");
        console.log(`Your health is ${this.stats.friend[this.beingType].health} plus power health bonus: ${powerBonus}`);
        console.log("<<<<<<<<<<<<<<<<<<<<<...>>>>>>>>>>>>>>>>>>>>>");

        this.stats.friend[this.beingType].health += powerBonus;
        console.log(`Your health is NOW: ${this.stats.friend[this.beingType].health}`);
        return this.stats;

    };

    ////////////////////////////

    walk() {
        return;
    };

    run() {
        return;
    };

    spin() {
        return;
    };

    fly() {
        return;
    };

    dance() { // you gotta remember to dance!
        return;
    };

    swim() {
        return;
    };

};

module.exports = Sprite;