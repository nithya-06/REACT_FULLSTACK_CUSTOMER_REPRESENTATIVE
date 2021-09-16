const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
let Order_ItemsSchema = new Schema({
    order_id: {
    type:Schema.ObjectId,
    ref:"Orders",
    required:true,
    unique:true 
    },
    item_id:{
        //referencing
        required:true,
        type:Schema.ObjectId,
        ref:"Items", 
        unique:true 
    }
},{
    collection: 'order_item'
});

module.exports = mongoose.model('Order_Items', Order_ItemsSchema);