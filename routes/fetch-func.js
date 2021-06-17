module.exports = function (url, objParam) {
    console.log("url");
    console.log(url);
    if (objParam != null) {
        return fetch(url, objParam)
            .then(res => {
                console.log("this fired a res");
                console.log(res);
                return res.json();
            });
    } else {
        return fetch(url)
            .then(res => res.json());
    };
};