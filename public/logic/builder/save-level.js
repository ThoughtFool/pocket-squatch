const level_data = require("../../data/level-data");

const saveLevel = function () {
    let savedLevelArray = [];

    let newLevelName = document.querySelector("#coolName").value;

    console.log("newLevelName");
    console.log(newLevelName);

    // let dynaSquareContent = document.querySelectorAll(".dyna-square-content");
    let dynaSquareContent = document.getElementsByClassName("dyna-square-content");

    for (let i = 0; i < dynaSquareContent.length; i++) {

        if (dynaSquareContent[i].classList.contains("square-rock")) {
            savedLevelArray.push(0);

        } else if (dynaSquareContent[i].classList.contains("square-wall")) {
            savedLevelArray.push(1);

        } else if (dynaSquareContent[i].classList.contains("square-lava")) {
            savedLevelArray.push(2);

        } else if (dynaSquareContent[i].classList.contains("square-water")) {
            savedLevelArray.push(3);

        } else if (dynaSquareContent[i].classList.contains("square-grass")) {
            savedLevelArray.push(4);

        } else if (dynaSquareContent[i].classList.contains("square-soil")) {
            savedLevelArray.push(5);

        } else if (dynaSquareContent[i].classList.contains("square-sky")) {
            savedLevelArray.push(6);

        } else if (dynaSquareContent[i].classList.contains("square-night")) {
            savedLevelArray.push(7);

        } else {
            console.log("Error: dynamic-square-content does not contain any color squares.");
        };
    };
    return level_data.saveNew(savedLevelArray, newLevelName);
    // return level_data.saveNew(savedLevelArray);
};

module.exports = saveLevel;