const express = require("express");
const router = express.Router();
const Level = require("../models/Level");

// Get all:
router.get("/", async (req, res) => {

    try {
        const levels = await Level.find().clone();
        res.json(levels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
});

// Get one:
router.get("/:id", getLevel, (req, res) => {
    res.json(res.level);
});

// Create one:
router.post("/", async (req, res) => {
    // res.send("success!");
    const level = new Level({
        name: req.body.name,
        createdBy: req.body.createdBy,
        blueprint: req.body.blueprint

        // name: Starklykind,
        // createdBy: Inversioneer,
        // blueprint: [
        //     2, 2, 2, 4, 2, 2,
        //     2, 2, 2, 4, 2, 2,
        //     2, 2, 2, 4, 2, 2,
        //     2, 2, 2, 4, 2, 2,
        //     2, 2, 2, 4, 2, 2,
        //     2, 2, 2, 4, 2, 2,
        // ]
    });

    try {
        const newLevel = await level.save();
        res.status(201).json(newLevel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

// Update one:
router.patch("/:id", getLevel, async (req, res) => {
    if (req.body.name != null) {
        res.level.name = req.body.name;
    };

    if (req.body.createdBy != null) {
        res.level.createdBy = req.body.createdBy;
    };

    try {
        const updatedLevel = await res.level.save();
        res.status(200).json(updatedLevel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

// Delete one:
router.delete("/:id", getLevel, async (req, res) => {
    try {
        await res.level.remove();
        res.json({ message: "Level deleted successfully!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware:
async function getLevel(req, res, next) {

    let level;
    await Level.findById(req.params.id, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: err.message });
        } else {

            if (data == null) {
                return res.status(404).json({ message: "My apologies! Level cannot be found" });
            };
            return level = data;
        };
    }).clone();

    res.level = level;
    next();
};

module.exports = router;