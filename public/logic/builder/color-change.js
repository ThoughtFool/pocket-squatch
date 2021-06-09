const colorChange = function (event) {

    const darkGrayBrush = document.getElementById("dark-gray-brush");

    // if (darkGrayBrush !== null) {
    const purpleBrush = document.getElementById("purple-brush");
    const redBrush = document.getElementById("red-brush");
    const blueBrush = document.getElementById("blue-brush");
    const greenBrush = document.getElementById("green-brush");
    const brownBrush = document.getElementById("brown-brush");
    const lightBlueBrush = document.getElementById("light-blue-brush");
    const blackBrush = document.getElementById("black-brush");



    if (event.buttons == 1 || event.buttons == 3) {
        let contentToColor;
        contentToColor = document.getElementById(event.target.id);

        // TODO: create loop to remove classes if contains:
        // contentToColor.classList.remove(contentToColor.classList[2]);
        //     "square-rock",
        //     "square-wall",
        //     "square-lava",
        //     "square-water",
        //     "square-grass",
        //     "square-soil",
        //     "square-sky",
        //     "square-night"
        //     );

        if (darkGrayBrush.classList.contains("in-use")) {
            let squareColor = "square-rock";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (purpleBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-wall";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);
            // contentToColor.classList.replace(oldToken, newToken);

        } else if (redBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-lava";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);

        } else if (blueBrush.classList.contains("in-use")) {
            let newToken = squareColor = "square-water";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(newToken);

        } else if (greenBrush.classList.contains("in-use")) {
            let squareColor = "square-grass";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (brownBrush.classList.contains("in-use")) {
            let squareColor = "square-soil";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (lightBlueBrush.classList.contains("in-use")) {
            let squareColor = "square-sky";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else if (blackBrush.classList.contains("in-use")) {
            let squareColor = "square-night";
            contentToColor.classList.remove(contentToColor.classList[2])
            contentToColor.classList.add(squareColor);

        } else {
            blackBrush.classList.remove(contentToColor.classList[2]).add("in-use"); // adding a default brush assignment and color to square
            let squareColor = "square-night";
            alert("No brush has been selected. Please select a brush to begin.");
            contentToColor.classList.add(squareColor);

        };
    };
};

module.exports = colorChange;