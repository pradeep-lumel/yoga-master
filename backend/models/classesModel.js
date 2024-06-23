const mongoose = require('mongoose');

// Define a schema for the 'Class' collection
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    instructorEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['approved', 'pending', 'rejected']
    },
    submitted: {
        type: Date,
        default: Date.now
    },
    totalEnrolled: {
        type: Number,
        default: 0
    },
    reason: {
        type: String,
        default: null
    }
});

// Create a model from the schema
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
