const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry.model');

router.post("/create", (req,res,next) => {
    console.log(req.body)
})

module.exports = router;