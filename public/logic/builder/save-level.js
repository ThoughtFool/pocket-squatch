const level_data = require("../../data/level-data");
// const PostMethod = require("../../../routes/post-method");
const fetchFunc = require("../../../routes/fetch-func");
const modalLoader = require("../../../public/logic/modal-loader");

const saveLevel = function () {
    let savedLevelArray = [];

    let newLevelName = document.querySelector("#coolName");
    console.log("newLevelName");
    console.log(newLevelName);

    let newCoolName = newLevelName.value;
    console.log("newCoolName");
    console.log(newCoolName);

    let createdBy = localStorage.getItem("game-author");

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

    let promise = new Promise(function (resolve, reject) {
        console.log("promise...");
        modalLoader("add", "#game-screen");

        let url = "/levels";
        let objParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                name: newCoolName,
                createdBy: createdBy,
                blueprint: savedLevelArray,
                enemy: {},
                enemyTot: 4,
                gravity: 0.2,
                drag: 0.999,
                groundDrag: 0.9,
                ground: 150
            })
        };

        return resolve(fetchFunc(url, objParam));
    });

    promise
        .then(function (response) {
            console.log(response);

            let mongoID = response.created._id;
            console.log(mongoID);

            let creationDate = response.created.creationDate;
            console.log(creationDate);

            console.log(response.created.createdBy);
            console.log(response.created.creationDate);

            return level_data.saveNew(savedLevelArray, newCoolName, mongoID, createdBy, creationDate);
        })

        .then(function (response) {
            console.log(response);

            return modalLoader("remove", "#game-screen");
        });
};

module.exports = saveLevel;