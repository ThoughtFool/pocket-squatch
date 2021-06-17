const shapeshift = function (gamespace, space_key, isDaytime, hasStoneQueen, isCooldown, isSummoned, biome) {
    let beingType;

    if (isDaytime && hasStoneQueen && isSummoned) { /////////////////////
        gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "stone queen";

        console.log("You have summoned the strength and power of the stone queen!");

    } else if (isDaytime && !hasStoneQueen && isSummoned) {
        gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "human";

        console.log("You need the stone queen to be able to summon her strength");

    } else if (isDaytime && hasStoneQueen && !isSummoned) { /////////////////////
        gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "human";

        console.log("You have the stone queen if you need her strength, summon her power!");

    } else if (!isDaytime && hasStoneQueen && isSummoned) { /////////////////////
        // if (biome === "forest") {
        //     gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "sasquatch";

        // } else if (biome === "snow") {
        //     gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "yeti";

        // } else if (biome === "sand") {
        //     gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "sandman";

        // } else if (biome === "swamp") {
        //     gamespace.data[space_key.index].gameInstance.player.sprite.beingType = "swampthing";

        // };

    } else {
        alert("error");
    };

};

module.exports = shapeshift;