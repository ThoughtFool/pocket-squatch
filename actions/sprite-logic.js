class Sprite {
    constructor(name, health, hasStoneQueen, timeOfDay) {
        this.name = name;
        this.health = health;
        this.hasStoneQueen = hasStoneQueen;
        this.timeOfDay = timeOfDay; // nightfall feeling sleepy
        this.asleep = this.isAsleep();
        this.being = this.transform();
    };

    transform() {
        if (this.hasStoneQueen) {
            console.log("I have the stone queen!");

            if (this.isAsleep()) {
                console.log("I am Sasquatch!");
                return this.being = "Sasquatch"; // use array to determine type of wildling based on location
            } else {
                console.log(`I am human! My name is ${this.name}.`);
                return this.being = "human";
            };
        };
        return;
    };

    // timeKeeper() {
    //     console.log("this.start:");
    //     console.log(this.start);

    //     if (this.timer >= 15) {
    //         this.timeOfDay = "nightfall";
    //     } else if (this.timer < 15) {
    //         this.timeOfDay = "daybreak";
    //     };

    //     if (this.timer >= 30) {
    //         this.start = Date.now();
    //     };

    //     this.timer = Date.now();
    //     this.timer = Math.floor((Date.now() - this.start) / 1000);
    //     // return this.timer;
    //     console.log("this.timer:");
    //     console.log(this.timer);
    //     // the difference will be in ms
    // };

    isAsleep() {
        if (this.timeOfDay === "daybreak") {
            return this.asleep = false;
        } else if (this.timeOfDay === "nightfall") {
            return this.asleep = true;
        };
    };

    getTime() {
        return;
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