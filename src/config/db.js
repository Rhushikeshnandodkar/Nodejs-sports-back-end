const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/Sportproject")
        console.log("Mongoose connected")
    }catch(error){
        console.log("error " + {error})
        process.exit(1)
    }
}
module.exports = connectDB