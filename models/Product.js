let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: mongoose.Types.ObjectId,
    category: {
        type: Schema.ObjectId,
        ref: 'Category'},
    producer: {
        type: Schema.Types.ObjectId,
        ref: 'Producer'},
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'},
    accessories: {
        type: Schema.Types.ObjectId,
        ref: 'Accessories'},
    price: Number,
    brand: String,
    description: [],
    image: [],
    colors: [],
    date: {
        type: Date,
        default: new Date()
    },
    sale: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);