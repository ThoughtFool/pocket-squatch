const shapeshift = function (isDaytime, hasQueen, isCooldown, isSummoned, biome) {
    let beingType;

    if (isDaytime && hasQueen && isSummoned) {
        beingType = "stone queen";
        alert("You have summoned the strength and power of the stone queen!");

    } else if (isDaytime && !hasQueen && isSummoned) {
        beingType = "human";
        alert("You need the stone queen to be able to summon her strength");

    } else if (isDaytime && hasQueen && !isSummoned) {
        beingType = "human";
        console.log("You have the stone queen if you need her strength, summon her power!");

    } else if (!isDaytime && hasQueen && isSummoned) {
        if (biome === "forest") {
            beingType = "sasquatch";
        } else if (biome === "snow") {
            beingType = "yeti";
        } else if (biome === "sand") {
            beingType = "sandman";
        } else if (biome === "swamp") {
            beingType = "swampthing";
        };

    } else {
        alert("error");
    };

};

module.exports = shapeshift;