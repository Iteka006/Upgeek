const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const commentModel = mongoose.model('comment',commentSchema)

module.exports = commentModel