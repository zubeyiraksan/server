import mongoose from "mongoose";

const memoryDb=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  creator:{
    type:String,
    required:true
  },
  image:{
    type:String
  },
  createDate:{
    type:Date,
    default:new Date()

  }
})

const Memory=mongoose.model("memo",memoryDb);
export default Memory;
