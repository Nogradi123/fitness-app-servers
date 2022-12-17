const express = require('express');
const router = express.Router();
const Nutrition = require('../models/Nutrition.model');

router.post("/create", (req,res,next) => {
    console.log(req.body)

    const foodItemToCreate = {
        foodName: req.body.foodName,
        serving: req.body.serving,
        measurement: req.body.measurement
    }

    Nutrition.create(foodItemToCreate)
    .then(newFoodEntry => {
        res.json(newFoodEntry)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.get('/mealItem', (req, res, next) => {
    Nutrition.find().then((nutritionDB) => {
        res.json(nutritionDB)
    }).catch((err) => {
        res.json({err, success: false})
    })
})

router.get('/:id', (req,res,next) => {
    console.log(req.params.id);

    Nutrition.findById(req.params.id)
    .then((foodItem) => {
        res.json(foodItem)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.post('/delete', (req,res,next) => {
    Nutrition.findByIdAndRemove(req.body.id)
    .then(() => {
        res.json(req.params.id)
    })
    .catch((err) => {
        res.json({err, success: false})
    })
})

router.post('/edit/:id', (req, res, next) => {
    Nutrition.findByIdAndUpdate(req.params.id, {
        foodName: req.body.foodName,
        serving: req.body.serving,
        measurement: req.body.measurement
    })
    .then(() => {
        res.json(req.params.id)
    })
    .catch((err) => {
        res.json({err, success:false})
    })
})
module.exports = router;