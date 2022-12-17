const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise.model');

router.post("/create", (req,res,next) => {
    console.log(req.body)

    const exerciseToCreate = {
        type: req.body.type,
        exerciseName: req.body.exerciseName,
        sets: req.body.sets,
        weight: req.body.weight,
        repetition: req.body.repetition,
        rest: req.body.rest
    }

    Exercise.create(exerciseToCreate)
    .then(newExercise => {
        res.json(newExercise)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.get('/exercise', (req, res, next) => {
    Exercise.find().then((exerciseDB) => {
        res.json(exerciseDB)
    }).catch((err) => {
        res.json({err, success: false})
    })
})

router.get('/:id', (req,res,next) => {
    console.log(req.params.id);

    Exercise.findById(req.params.id)
    .then((theExercise) => {
        res.json(theExercise)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.post('/delete', (req,res,next) => {
    Exercise.findByIdAndRemove(req.body.id)
    .then(() => {
        res.json(req.params.id)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.post('/edit/:id', (req, res, next) => {
    Exercise.findByIdAndUpdate(req.params.id, {
        type: req.body.type,
        exerciseName: req.body.exerciseName,
        sets: req.body.sets,
        weight: req.body.weight,
        repetition: req.body.repetition,
        rest: req.body.rest
    })
    .then(() => {
        res.json(req.params.id)
    })
    .catch((err) => {
        res.json({err, success:false})
    })
})
module.exports = router;