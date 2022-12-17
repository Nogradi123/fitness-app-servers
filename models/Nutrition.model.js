const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const nutritionSchema = new Schema({
    
    foodName: String,
    serving: Number,
    measurement: Number
       
    },
    {
    timestamps: true
    }
);

const Nutrition = model("Nutrition", nutritionSchema);

module.exports = Nutrition;