// TODO: create methods to build enemies based on levels of difficulty:

const enemyType = {
    // enemyType[this.level].type.length
    01: {
        pos: [{
                x: 150,
                y: 100
            },
            {
                x: 250,
                y: 100
            },
            {
                x: 350,
                y: 100
            },
            {
                x: 450,
                y: 100
            },
            {
                x: 550,
                y: 100
            }
        ],
        type: [{
                jumper: {
                    name: "jumper",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                crawler: {
                    name: "crawler",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                boss: {
                    name: "boss",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            }
        ]
    },
    02: {
        pos: [{
                x: 150,
                y: 100
            },
            {
                x: 250,
                y: 100
            },
            {
                x: 350,
                y: 100
            },
            {
                x: 450,
                y: 100
            },
            {
                x: 550,
                y: 100
            }
        ],
        type: [{
                jumper: {
                    name: "jumper",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                crawler: {
                    name: "crawler",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                boss: {
                    name: "boss",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            }
        ]
    },
    03: {
        pos: [{
                x: 150,
                y: 100
            },
            {
                x: 250,
                y: 100
            },
            {
                x: 350,
                y: 100
            },
            {
                x: 450,
                y: 100
            },
            {
                x: 550,
                y: 100
            }
        ],
        type: [{
                jumper: {
                    name: "jumper",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                crawler: {
                    name: "crawler",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            },
            {
                boss: {
                    name: "boss",
                    health: 100,
                    strength: 25,
                    move: function () {
                        // actionType here
                    },
                    attack: function () {
                        // attack move here
                    }
                }
            }
        ]
    }
};

module.exports = enemyType