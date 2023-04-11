const mongoose=require('mongoose')

const userschema=mongoose.Schema({

    name:{type:String,require},
    email:{type:String,require},
    password:{type:String,require}
},{
    timestamps:true
})

const userModel=mongoose.model("users",userschema)

module.exports=userModel