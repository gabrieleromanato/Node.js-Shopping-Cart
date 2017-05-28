'use strict';

const mongoose  = require('mongoose');

let Schema  = mongoose.Schema;

let ProductsSchema = new Schema({
    product_id: Number,
    id: String,
    title: String,
    description: String,
    manufacturer: String,
    price: Number,
    image: String
},{collection: 'products'});

module.exports = mongoose.model('Products', ProductsSchema);