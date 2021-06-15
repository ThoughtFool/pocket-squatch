module.exports = function (url, objParam) {
    console.log("url");
    console.log(url);
    if (objParam != null) {
        return fetch(url, objParam);
    } else {
        return fetch(url);
    };
};