const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
let counter = 1;
let CountedId = {type: Number, default: () => counter++};
let ItemsSchema = new Schema({
    itemsid: {
      required:true,
      type:Number,
      id:CountedId,
      unique:true  
    },
    itemsname:{
        type:String,
        required:true
    }
},{
    collection: 'items'
});

module.exports = mongoose.model('Items', ItemsSchema);