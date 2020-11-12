//Require mongoose
const mongoose = require("mongoose");

//Use mongoose
const Schema = mongoose.Schema;

//Create workoutSchema include the day and excercises
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    //Exercises should include name, type, weight, sets, reps, duration, and distance
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name"
            },
            duration: {
                type: Number,
                required: "Exercise duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;