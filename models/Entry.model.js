const { Schema, model } = require("mongoose");


const entrySchema = new Schema({
    
    exercise_id:  {type: Schema.ObjectId, ref: 'Exercise'},
    nutrition_id: {type: Schema.ObjectId, ref: 'Nutrition'},
    user_id: {type: Schema.ObjectId, ref: 'User'},
    created: String
    },
    {
    timestamps: true
    }
);

const Entry = model("Entry", entrySchema);

module.exports = Entry;





// created:{ type: Date, default: Date.now }