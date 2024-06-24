const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the cart item schema
const cartItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    classId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Class', // assuming you have a Class model
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
});

// Define the cart schema
// const cartSchema = new Schema({
//     items: [cartItemSchema],
// });

// Create the cart model
const Cart = mongoose.model('Cart', cartItemSchema);

module.exports = Cart;
