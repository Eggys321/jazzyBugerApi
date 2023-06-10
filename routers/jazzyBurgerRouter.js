const express = require('express');
const router = express.Router()
const jazzyModel = require('../model/jazzyModel');
const jazzyBurgerControler = require('../controler/jazzyBurgerControler')

router.post('/create',jazzyBurgerControler.jazzy_burger_create)

router.get('/all',jazzyBurgerControler.jazzy_burger_all)

module.exports = router
