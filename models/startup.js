const mongoose = require('mongoose')

const startupSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"]
    },
    legalName:{
        type:String,
        required:[true,"Please provide a name"]
    },
    regNumber:{
        type:String,
        required:[true,"Please provide a Registration number from RDB"]
    },
    location:{
        type:String,
        required:[true,"Please provide a location"]
    },
    website:{
        type:String,
        required:[true,"Please provide a location"]
    },
    category:{
        type: String,
        enum: ["Agriculture","Finance","Civil","Health Care","Education","Entertainment","Ecommerce","Artificial Intelligence","Big Data"],
        required:[true,"Please choose a startup category"]
    },
    founder:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"Please choose a startup category"]
    }
})

const startupModel = mongoose.model('startup',startupSchema)

module.exports = startupModel