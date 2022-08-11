const { asyncHandler } = require("../middlewares/asyncHandler")
const { BadRequest,NotFound,NotAcceptable } = require('http-errors')

function saveModel(model){
    return asyncHandler(async (req,res,next)=>{
        const newRecord = await new model(req.body).save()
        res.status(201).json({data:newRecord})
    })
}

function getModels(model){
    return asyncHandler(async (req,res,next)=>{
        const records = await model.find()
        res.status(201).json({data:records})
    })
}

function getModel(model){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await model.findById(req.params.id)
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}

function updateModel(model){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        if(!getModel(model)){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        if(req.body.password){
            throw new NotAcceptable('Password can not be edited in updateModel')
        }
        const record = await model.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({data:record})
    })
}

function deleteModel(model){
    return asyncHandler(async (req,res,next)=>{
        if(!req.params.id){
            throw new BadRequest('Please provide a valid Object_id')
        }
        const record = await model.findByIdAndDelete(req.params.id)
        if(!record){
            throw new NotFound(`No record with ${req.params.id} was found`)
        }
        res.status(200).json({data:record})
    })
}

module.exports = { saveModel,getModel,getModels,updateModel,deleteModel } 