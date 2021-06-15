module.exports = function (actionType, appendedTo) {

    let modalLoc = document.querySelector(appendedTo);

    if (actionType !== "add") {
        let oldModal = document.getElementById("modal-loader");
        modalLoc.removeChild(oldModal);
        return ("done!")

    } else { // modalLoader("remove", "#game-screen");
        let newModal = document.createElement("div");
        newModal.id = "modal-loader";
        newModal.className = "modal";
        modalLoc.appendChild(newModal);
        let newModalElem = document.querySelector("#modal-loader");

        let newLoader = document.createElement("div");
        newLoader.className = "loader";
        newModalElem.appendChild(newLoader);
        return ("done!")
    };
};