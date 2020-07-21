const updatePos = require("../sprite-logic/method/update-pos");
// const world = require("../../data/level-data");

class Sprite {
    // Sprite_Physics(gamescreen_ID, ground_ID, friendOrFoe, id, velocity, gravity, friction, xPos, yPos);
    // Sprite_Physics("game-screen", "ground-01", "friend", sprite-holder, 2, 1, .8, 300, 300);

    constructor(name, health, strength, hasStoneQueen, isDaytime, actionTypes) {
        // constructor(name, health, strength, hasStoneQueen, isDaytime, actionTypes, gameData) {
        this.name = name;

        // create a checkStats function depending on beingType type
        this.stats = {
            friend: {
                human: {
                    health: health,
                    strength: strength,
                    xPos: 0,
                    yPos: 0,
                },
                sasquatch: {
                    health: health * 2,
                    strength: strength * 2,
                    xPos: 0,
                    yPos: 0,
                    // size: 50, TODO: add size based on shapeshift
                    // powerRingColor: "green",
                    // dx: 0,
                    // dy: 0,
                    // onGround: false,
                    // jumpPower: -10,
                    // moveSpeed: 5
                }
            },
            foe: {}
            // foe: this.getGameData(gameData)
            // getData from enemy constructor after "load_level(getEnemySprites(num, level))"
        };

        this.hasStoneQueen = hasStoneQueen;
        this.isDaytime = isDaytime; // nightfall feeling sleepy
        this.asleep = this.isAsleep();
        this.beingType = "human";
        // this.beingType = this.shapeshift();
        this.spiritType = ["ghost fox", "cobalt corvid", "scarlet racerunner", "sand lion", "night frost"];
        this.creatureType = ["sasquatch", "yeti", "bigfoot", "abonimable", "swampthing", "sandman"];
        this.locType = [
            "dream-world",
            "real-world",
            "past",
            "present"
        ];
        // TODO: create biomeGetter();
        this.biome = "forest"; // testing ONLY
        this.myLocation = this.isWhere();
        this.timezone = ["dreamtime", "realtime"]; // slow vs. fast
        this.actionTypes = actionTypes;
        // size: 25; TODO: add size based on shapeshift
        this.powerRingColor = "blue";
        this.dx = 0;
        this.dy = 0;
        this.onGround = true;
        this.jumpPower = -5;
        this.moveSpeed = 2;

        this.physics = {};
        this.updatePos = updatePos;
        // TODO: create getter and setter:
        this.isSummoned = false;
    };

    set_timeOfDay(bool) {
        return this.isDaytime = bool;
    };

    shapeshift() {
        if (this.hasStoneQueen) {
            console.info("I have the stone queen!");

            if (this.isAsleep()) {

                if (this.biome === "forest") {
                    console.info("I am Sasquatch!");
                    return this.beingType = "sasquatch"; // use array to determine type of wildling, based on location

                } else if (this.biome === "snow") {
                    console.info("I am Yeti!");
                    return this.beingType = "yeti";

                } else if (this.biome === "sand") {
                    console.info("I am Sandman!");
                    return this.beingType = "sandman";

                } else if (this.biome === "swamp") {
                    console.info("I am Swampthing!");
                    return this.beingType = "swampthing";

                } else {
                    alert("no this.biome identified");
                };

            } else {

                if (this.isSummoned) {
                    console.info("You have summoned the strength and power of the stone queen!");
                    return this.beingType = "stone queen";

                } else {
                    console.info(`I am human! My name is ${this.name}.`);
                    return this.beingType = "human";

                };
            };

        } else if (!this.hasStoneQueen) {
            console.info("You need the stone queen to be able to summon her strength");
            return this.beingType = "human";

        } else {
            alert("error");

        };
    };

    isAsleep() {
        if (this.isDaytime) { // "daybreak"
        this.asleep = false;
        return false;
        } else if (this.isDaytime == false) { // "nightfall"
        this.asleep = true;
        return true;
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