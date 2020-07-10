const gameSpace = {
    data: [],

    setData: function (newInstance) {
        let newData = {
            gameSpaceID: `gamespace-${Date.now()}`,
            gameInstance: newInstance
        };
        this.data.push(newData);
        return newData.gameSpaceID;
        // return this.data;
    },

    getInstance: function (gameSpaceID) {
        let dataFound = this.data.find(dataSet => dataSet.gameSpaceID == gameSpaceID);
        return dataFound
    },

    getIndex: function (gameSpaceID) {
        let dataFound = this.data.findIndex(dataSet => dataSet.gameSpaceID == gameSpaceID);
        return dataFound;
    },

    finder: function (findWhat, gameSpaceID) { // testing ternary operator:
        return (findWhat === "index" ? this.data.findIndex(dataSet => dataSet.gameSpaceID == gameSpaceID) : this.data.find(dataSet => dataSet.gameSpaceID == gameSpaceID));
    },
};

module.exports = gameSpace;