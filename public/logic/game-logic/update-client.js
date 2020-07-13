const updateClientScreen = function (dataObj) {
    // Testing ONLY:
    const greetingsSpan = document.getElementById("greetings-span");
    const roomIDSpan = document.getElementById("roomID-span");
    const SpaceIDSpan = document.getElementById("SpaceID-span");
    const SpaceIndexSpan = document.getElementById("SpaceIndex-span");
    const gamspaceSpan = document.getElementById("gamspace-span");

    let {
        spriteName,
        gamespace,
        SpaceID,
        SpaceIndex,
        space_key
    } = dataObj;

    // gamespace.data[space_key.index].gameInstance.data.timer
    console.log("gamespace.......");
    console.log(gamespace);

    greetingsSpan.innerText = gamespace.data[SpaceIndex].gameInstance.player.sprite.name;
    roomIDSpan.innerText = gamespace.data[space_key.index].gameInstance.data.roomID;
    SpaceIDSpan.innerText = SpaceID;
    SpaceIndexSpan.innerText = SpaceIndex;
    gamspaceSpan.innerText = gamespace;
};

module.exports = updateClientScreen;