const mongoose=require('mongoose')

const Schema=mongoose.Schema

const ProductSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name!"]
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    }
})