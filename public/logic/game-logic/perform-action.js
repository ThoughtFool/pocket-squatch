const performAction = function (actionType) {
    if (actionType === "isWinner" || actionType === "isDefeated") {
        gameroom.player[actionType](gameroom);
    } else {
        // let updateGameroom = gameroom.player.takeAction(actionType);
        let updateGameroom = gameroom.player[actionType]();
    
        console.log("====================");
        console.log("updateGameroom:");
        console.log("====================");
        console.log(updateGameroom);
        console.log("====================");
        console.log(gameroom.timer);
    };
};