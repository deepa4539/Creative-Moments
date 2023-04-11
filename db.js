const mongoose=require('mongoose')

// var mongodburl='mongodb+srv://Dp:Deep&deep3993@cluster0.tbocc.mongodb.net/mern-ecommerce'

var mongodburl='mongodb+srv://deepa26839:XtG8QoqeJOwLDfCZ@cluster0.w0ezxx4.mongodb.net/ecommerce'

mongoose.connect(mongodburl,{useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect=mongoose.connection

dbconnect.on('error',()=> {

    console.log(`Mongo DB Connection Failed`);
})
dbconnect.on('connected',()=> {

console.log(`Mongo DB Connection Successfull`);
})


module.exports=mongoose