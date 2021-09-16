const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let counter = 1;
let CountedId = {type: Number, default: () => counter++};
// Define collection and schema for Orders
let OrdersSchema = new Schema({
    ordersid: {
      required:true,
      type:Number,
      id:CountedId,
      unique:true  
    },
    user_id:{
    type:Schema.ObjectId,
    ref:"Users"
    }
},{
    collection: 'orders'
});

module.exports = mongoose.model('Orders', OrdersSchema);