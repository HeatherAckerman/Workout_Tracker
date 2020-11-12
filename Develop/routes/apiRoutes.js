//Require express router and models
const router = require("express").Router();
const workoutSchema = require("../models/workoutSchema");

//getLastWorkout
router.get("/api/workouts", (req, res) => {
    workoutSchema.find({}).sort({ day: -1 }).limit(1)
        .then(dbWorkoutSchema => {
            res.json(dbWorkoutSchema);
        })
        .catch(err => {
            res.json(err);
        });
});

//addExercise
router.put("/api/workouts/:id", (req, res) => {

    let urlData = req.params;
    let data = req.body;
    workoutSchema.updateOne({ _id: urlData.id }, {
        $push: {
            exercises: [
                {
                    "type": data.type,
                    "name": data.name,
                    "duration": data.duration,
                    "weight": data.weight,
                    "reps": data.reps,
                    "sets": data.sets,
                    "distance": data.distance,
                    
                }
            ]
        }
    }).then(dbUpdate => {
        res.json(dbUpdate);
    })
        .catch(err => {
            res.json(err);
        });

});


//createWorkout
router.post("/api/workouts", (req, res) => {
    workoutSchema.create({
        day: new Date().setDate(new Date().getDate())
    }).then(dbCreate=> {
        res.json(dbCreate);
    })
        .catch(err => {
            res.json(err);
        });
});

//getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
    workoutSchema.find({})
        .then(dbWorkoutRange => {
            res.json(dbWorkoutRange);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;