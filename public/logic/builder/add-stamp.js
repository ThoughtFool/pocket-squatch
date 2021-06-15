const addStampToList = function (mongoID) {

    let timeStamp = Date.now();
    const selector = document.getElementById("time-stamp-id");
    let option = document.createElement("option");
    option.value = timeStamp;
    option.text = timeStamp;
    selector.add(option, selector[0]);
    return timeStamp;
};

module.exports = addStampToList;