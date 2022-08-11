const express = require('express')
const { saveModel, getModels, getModel, updateModel, deleteModel } = require('../controllers/connectors')
const userModel = require('../models/users')

const router = express.Router()

router.route('/').get(getModels(userModel)).post(saveModel(userModel))
router.route('/:id').get(getModel(userModel)).patch(updateModel(userModel)).delete(deleteModel(userModel))

module.exports = router