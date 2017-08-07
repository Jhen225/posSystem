var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    'orderNumber':Number,
    'items':[{type:Schema.Types.ObjectId,ref:'Item',required:true}]
});

var Order = module.exports = mongoose.model('Order',orderSchema);