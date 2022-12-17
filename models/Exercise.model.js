const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
    
    type: String,
    exerciseName: String,
    sets: Number,
    weight: Number,
    repetition: Number,
    rest: Number,
     

    },
    {
    timestamps: true
    }
);

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;