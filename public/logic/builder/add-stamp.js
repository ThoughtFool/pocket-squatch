const addStampToList = function (mongoID) {

    let objectIdStamp = mongoID;
    const selector = document.getElementById("time-stamp-id");
    let option = document.createElement("option");
    option.value = objectIdStamp;
    option.text = objectIdStamp;
    option.id = objectIdStamp;
    selector.add(option, selector[0]);
    return objectIdStamp;

};

module.exports = addStampToList;