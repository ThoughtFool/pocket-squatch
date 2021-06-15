// let data = { element: "barium" };

module.exports = PostMethod = function (url, data) {
    console.log("data");
    console.log(data);
    let testData = {
        "name": "Q. Taggert!",
        "createdBy": "Inversioneer",
        "blueprint":
            ["2,2,2,4,2,2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 'Hello there'"]

    };
    return fetch(url, { method: "POST", body: JSON.stringify(testData) });
};

// fetch("/post/data/here", {
//     method: "POST",
//     body: JSON.stringify(data)
// }).then(res => {
//     console.log("Request complete! response:", res);
// });


// If you are as lazy as me (or just prefer a shortcut/helper):

// window.post = function (url, data) {
//     return fetch(url, { method: "POST", body: JSON.stringify(data) });
// }

// ...

// post("post/data/here", { element: "osmium" });