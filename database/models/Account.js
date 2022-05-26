const mongoose = require("mongoose");
const {Schema}= mongoose;

const accountSchema = new Schema({
username:String,
funds:Number, 
image:String,
});

   module.exports = mongoose.model('Account', accountSchema);