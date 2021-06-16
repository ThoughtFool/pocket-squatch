const contentBuilder = require("./content-builder");
const level_data = require("../../data/level-data");
const fetchFunc = require("../../../routes/fetch-func");
const modalLoader = require("../../../public/logic/modal-loader");

let squareContentArray = ["square-rock", "square-wall", "square-lava", "square-water", "square-grass", "square-soil", "square-sky", "square-night"];

const loadMyLevel = function () {
    console.log(document.getElementById("time-stamp-id").value);
    let timeID = document.getElementById("time-stamp-id").value;
    let timeID_data = document.getElementById("time-stamp-id");
    // TODO: append ids so that user can access (create a drop-down) / this can also be use for history (undo/redo)
    console.log(timeID);
    console.log("level_data");
    console.log(level_data);

    console.log("timeID_data.value");
    console.log(timeID_data.value);

    let promise = new Promise(function (resolve, reject) {
        console.log("promise...");
        modalLoader("add", "#game-screen");

        return resolve(fetchFunc(`/levels/${timeID}`, { mode: 'cors' }));
    });

    promise
        .then(function (response) {
            console.log(response);

            // response.blueprint
            return response;
        })
        .then(function (response) {
            console.log("level_data");
            console.log(level_data);
            console.log("timeID");
            console.log(timeID);

            return contentBuilder(squareContentArray, level_data.contentIDArray, level_data, timeID);
        })
        .then(function (response) {
            console.log(response);

            return modalLoader("remove", "#game-screen");
        });

    // =======================================================================

    // promise
    //     .then(function (response) {
    //         console.log(response);

    //         let url = `http://localhost:3000/levels/${timeID_data.value}`;

    //         return fetchFunc(url);
    //     })
    //     .then(function (response) {
    //         console.log(response.json());
    //         return response.json();
    //     })
    //     .then(function (response) {
    //         console.log(response);

    //         return modalLoader("remove", "#game-screen");
    //     });
};

module.exports = loadMyLevel;