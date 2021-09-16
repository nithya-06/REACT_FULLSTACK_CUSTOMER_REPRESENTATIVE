const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let counter = 1;
let CountedId = {type: Number, default: () => counter++};
// Define collection and schema for Business
let UsersSchema = new Schema({
    usersid: {
      required:true,
      type:Number,
      id:CountedId,
      unique:true  
    },
    usersname:{
        type:String,
        required:true
    }
},{
    collection: 'users'
});


module.exports = mongoose.model('Users', UsersSchema);
