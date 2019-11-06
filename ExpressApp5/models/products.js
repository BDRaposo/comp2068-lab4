var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number
    }
);

module.exports = mongoose.model('Product', ProductSchema);