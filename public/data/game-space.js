const gameSpace = {
    data: [],

    setData: function (newInstance) {
        let newData = {
            gameSpaceID: `gamespace-${Date.now()}`,
            gameInstance: newInstance
        };
        this.data.push(newData);
    }
};

module.exports = gameSpace;