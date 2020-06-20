let clientStart = Date.now();
let myTimer = 0;

const clientTimeKeeper = function () {

    let timerSpan = document.querySelector("#timer-span");
    timerSpan.innerHTML = myTimer;

    if (myTimer < 15) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer <= 0) {
            console.log("As a shapeshifter, your transformation begins!");
        };

    } else if (myTimer >= 15 && myTimer < 30) {
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`=======================`);
        if (myTimer === 15) {
            console.log("As a shapeshifter, your transformation begins!");
        };

    } else if (myTimer >= 30) {
        clientStart = Date.now();
        console.log(`=======================`);
        console.log(`myTimer: ${myTimer}`);

        console.log(`restart myTimer!`);
        console.log(`=======================`);
    };

    // find difference in seconds:
    myTimer = Math.floor((Date.now() - clientStart) / 1000);
    // timerSpan.innerHTML = myTimer;
    return myTimer;
};

setInterval(clientTimeKeeper, 1000);
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

// const getData = function (event) {
//     event.preventDefault();
//     console.log(event.target.value);
//     console.log("this");
//     console.log(this);
// };

// const radBtns = document.myForm.strikeOrDefend;
// let prev = null;
// for (let i = 0; i < radBtns.length; i++) {
//     radBtns[i].addEventListener('change', function () {
//         (prev) ? console.log(prev.value): null;
//         if (this !== prev) {
//             prev = this;
//         };
//         console.log(this.value);
//     });
// };
// const counter = document.getElementById("counter-span");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", getData);
// // counter.innerHTML = myTimer;
