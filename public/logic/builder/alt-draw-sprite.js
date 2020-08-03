        .then(function (isDone) {

            let gameField = document.getElementById("my-grid").getBoundingClientRect();
            console.info("gameField");
            console.info(gameField);
            
            let levelObj = {
                coords: {
                    left: gameField.left + gameField.width * .5,
                    top: gameField.top + gameField.height * .5,
                    width: gameField.width / 4,
                    height: gameField.height / 4,
                    right: this.left + this.width
                },
                elemType: "div",
                className: "transform-holder",
                class_moveType: "move-stand",
                id: "sprite-holder",
                imgUrl: "/images/lyric-stand.png"
            };
            return drawLevel("game-field", levelObj);
            // return drawLevel("my-grid", levelObj);
        })