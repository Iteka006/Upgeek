const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text:String,
    image:String,
    video:String,
    audio:String,
    likes:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const postModel = mongoose.model('post',postSchema)

module.exports = postModel