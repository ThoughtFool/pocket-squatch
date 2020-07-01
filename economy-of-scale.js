// let lion, // more resources acquired, protected, needed / less offoffspring to share resources / longer lifelifespans
//     microbe,
resource = 100; // less resources acquired, protected, needed / more offoffspring to share/collect resources / shorter lifelifespans (accelerated: viable self-sustainer);

class Lifeform {
    constructor(size, season) {

        this.size = size;
        this.season = this.setSeason(season);
        this.stats = this.getStats();
        this.bitesize = this.stats[0]; // bitesize,
        this.lifespan = this.stats[1]; // lifespan,
        this.offspring = this.stats[2]; // offspring,
        // needs per day to survive
        this.needs_per = {
            day: this.bitesize, // need per day to survive
            lifetime: this.cycle(this.lifespan, this.bitesize),
            adult: this.cycle(this.lifespan, this.bitesize),
            juvenile: this.cycle(this.lifespan, this.bitesize)
        };
        this.multiplier = {
            plenty: 1,
            scarcity: 2,
            famine: 4
        };
    };

    getStats () {
        if (this.size === "large") {
            return [10, 100, 10];

            resource -= bitesize - size;
        } else if (this.size === "small") {
            return [1, 10, 100];

            resource -= bitesize - size;
        };
    };

    cycle(lifespan, bitesize) {

        return (lifespan / bitesize);
    };


    shareResource () {}; // with offspring
    protectResource () {}; // spread thin if protect more

    setSeason (season) {
        return season;
    };

    getSeason () {
        return this.season;
    };

    season_multiplier () {
        return this.multiplier[this.season];
    };

    getResource () {
        this.resource /= this.multiplier;
        // this.resource -= bitesize - size;

    }; // based on size

    spendResource () {
        this.resource
    };


    //     // // cycle: function (lifeform, resource, season) {

    //     // if (lifeform.size === "large") {
    //     //     resource -= bitesize - size;
    //     // } else if (lifeform.size === "small") {
    //     //     resource -= bitesize - size;
    //     // };
    // }
}; // natural progression

const lion = new Lifeform("large", "plenty");

console.log(lion);
console.log(lion.setSeason("famine"));
console.log(lion);

class Resource_Class {
    constructor(total, resource) {
        this.total = total;
        // this.resource = resource;
        this.remaining = this.total;
        this.time = 0;
        this.counter = 0;
        this.day = this.getDay();
        // this.isBefore = true;
    };

    getDay () {
        let day = this.counter;
        return day;
    };

    time () {
        this.counter++;
        return this.counter
    };

    afterDispersal (bitesize) {
        let left = this.total - bitesize;
        return left;
    };

    timeloop () {
        // console.log(this.day);

        // console.log("Source_01.afterDispersal(lion.bitesize)");
        // console.log(Source_01.afterDispersal(lion.bitesize));

        // return Source_01.remaining = Source_01.afterDispersal(lion.bitesize);
    };
    
};

const Source_01 = new Resource_Class(100);
setInterval(Source_01.timeloop, 2000);
// console.log(Source_01);

// setInterval(overTime.timeloop, 5000);
// const testLoop = function (myInterval, a = function() {
//     console.log("Source_01");
//     console.log(Source_01);
// }) {
//     myInterval;

//     a();
// };

// testLoop(setInterval(Source_01.timeloop, 2000));

// const theSystem = {
//     season: ["plenty", "scarcity", "famine"],
//     cycle: function (lifeform, resource, season) {
//         if (lifeform.size === "large") {
//             resource -= bitesize - size;
//         } else if (lifeform.size === "small") {
//             resource -= bitesize - size;
//         };
//     }
// };