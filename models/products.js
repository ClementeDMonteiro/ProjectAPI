// models/products.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
 name: String,
 description: String,
 price: Number,
 stockQuantity: Number
 
});

ProductSchema.statics.getProducts = function() {
    return this.find({}).exec();
   };
   
   

module.exports = mongoose.model('Product', ProductSchema);
