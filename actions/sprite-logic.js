// const attackType = {
//     strike: {
//         human: "test",
//         sasquatch: "test2"
//     }
// };

class Sprite {
    constructor(name, health, strength, hasStoneQueen, timeOfDay, actionTypes) {
        this.name = name;

        // create a checkStats function depending on beingType type
        this.stats = {
            human: {
                health: health,
                strength: strength
            },
            sasquatch: {
                health: health * 2,
                strength: strength * 2
            }
        };

        this.hasStoneQueen = hasStoneQueen;
        this.timeOfDay = timeOfDay; // nightfall feeling sleepy
        this.asleep = this.isAsleep();
        this.beingType = this.transform();
        this.location = [
            "dream-world",
            "real-world",
            "past",
            "present"
        ];
        this.timezone = ["dreamtime", "realtime"]; // slow vs. fast
        this.actionTypes = actionTypes;
        this.attackType = {
            strike: {
                human: "test",
                sasquatch: "test2"
            }
        };
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

    takeAction(moveType, gameData) {
        console.log("this.beingType:");
        console.log(this.beingType);
        return this.actionTypes[this.beingType][moveType](gameData, this.getStats());

    };

    getStats() {

        return (
            this.stats[this.beingType]
            );
    };

    setStats(newData) {

        return (
            this.stats[this.beingType] = newData
        );
    };

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

// setInterval(thistimeKeeper, 1000);

module.exports = Sprite;