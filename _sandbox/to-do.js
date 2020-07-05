// setInterval(() => {
//     testSprite.updatePos();
//     console.log(testSprite);
// }, 1000/60);

// TODO: create a generic function to pass in enemy id, similar to collision checker:

// TODO: create "idle" class for stands, flys, sits, etc.
// TODO: countdown clock/timer only allows to use stone queen's powers. needs recharging
// TODO: transform: if flying while transformed to sasquatch, then falls to ground (spritesheet fall and laying on ground and getting up):


// function to update sprite div location && initiate animation sequence && also listen for sprite collisions with other on-screen objects;
// TODO: created this func just in case needed later to streamline code:

// // call takeAction and provide actionType
// // TODO: create actionType for defend, transform, etc.
// // TODO: create method for stone queen's different forms


// time keeper variation:

// function start() {
//     startTime = new Date();
// };

// function end() {
//     endTime = new Date();
//     var timeDiff = endTime - startTime; //in ms
//     // strip the ms
//     timeDiff /= 1000;

//     // get seconds 
//     var seconds = Math.round(timeDiff);
//     console.log(seconds + " seconds");
// };