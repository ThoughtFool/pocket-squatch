const gameroom = {
    player: {},
    roomID: 123, // placeholder
    currentLevel: 01,
    levels: {
        01: {
            completed: false,
            locked: false
        },
        02: {
            completed: false,
            locked: true
        },
        03: {
            completed: false,
            locked: true
        },
        04: {
            completed: false,
            locked: true
        },
        05: {
            completed: false,
            locked: true
        },
        06: {
            completed: false,
            locked: true
        },
        07: {
            completed: false,
            locked: true
        },
        07: {
            completed: false,
            locked: true
        },
        09: {
            completed: false,
            locked: true
        },
        10: {
            completed: false,
            locked: true
        },
    },
    wins: 0,
    losses: 0
};

module.exports = gameroom;