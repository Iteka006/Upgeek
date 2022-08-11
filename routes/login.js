const express = require('express')
const jwt = require('jsonwebtoken')
const {NotFound} = require('http-errors')

const { getModelByObj } = require('../controllers/connectors')
const userModel = require('../models/users')
const { rawListeners } = require('../models/users')

const router = express.Router()

router.post('/',async (req,res)=>{
    try{
        let user = await userModel.find({email:req.body.email,password:req.body.email})
        if(!user){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        let token = jwt.sign(
            {userId:user._id},
            process.env.AUTH_SECRET,
            {expiresIn:1000*60*60}
        )
        req.token = token
    }catch(err){
        next(err)
    }
})

module.exports = router