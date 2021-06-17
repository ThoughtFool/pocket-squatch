const getImgSize = function (imgUrl) {
    let gamescreen = document.getElementById("game-screen");
    // let gamescreen_coords = gamescreen.getBoundingClientRect();

    let tempImg = document.createElement("img");
    gamescreen.appendChild(tempImg);

    tempImg.style.position = "absolute";
    // tempImg.style.left = gamescreen_coords.right;
    // tempImg.style.top = gamescreen_coords.bottom;
    tempImg.src = imgUrl;

    let width = tempImg.naturalWidth;
    let height = tempImg.naturalHeight;

    let tempImg_coords = {
        width: width,
        height: height
    };


    console.log("tempImg_coords");
    console.log(tempImg_coords);

    // gamescreen.removeChild(tempImg);

    return tempImg_coords;
};

module.exports = getImgSize;