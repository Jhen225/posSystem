var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const itemSchema = new Schema({
    'name':{type:String,required:true},
    'recipe':{type:Object,required:true}
});

var Item = module.exports = mongoose.model('Item',itemSchema);