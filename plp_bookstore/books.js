const{mongoose} = require('../db');
const{Schema} = mongoose;

const booksSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    published_Year: {type: Number, required: true},
    price: {type: Number, required: true},
    in_stock: {type: Boolean, default: true},
    pages: {type: Number, required: true},
    publisher: {type: String, required: true}
}, {timestamps: true});

const Books = mongoose.model('Books', booksSchema);

module.exports = {Books};





