'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let ContactSchema = new Schema({
    /**
     * Name of the Contact
     */
    name: {
        type: String,
        required: "Name is required"
    },
    mobile:{
        type: Number,
        required: "Mobile is required"
    },
    email:{
        type: String,
        required: "Email is required"
    },
    /**
     * Contact Creation Date
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * Last Date Modified
     */
    modified_date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('contacts', ContactSchema);