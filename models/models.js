const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    ref: {
        type: String
    },
    category_id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    energy_type: {
        type: String
    },
    date: {
        type: String
    },
    bid: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
});
const Card = mongoose.model('card', CardSchema);


const CategorySchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
});
const Category = mongoose.model('category', CategorySchema);


module.exports = { Card, Category };