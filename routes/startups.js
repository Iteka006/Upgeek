const express = require('express')
const { saveModel, getModels, getModel, updateModel, deleteModel } = require('../controllers/connectors')
const startupModel = require('../models/startup')

const router = express.Router()

router.route('/').get(getModels(startupModel)).post(saveModel(startupModel))
router.route('/:id').get(getModel(startupModel)).patch(updateModel(startupModel)).delete(deleteModel(startupModel))

module.exports = router
