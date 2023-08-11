const mongoose = require('mongoose');

const interestListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true
    },
    event_type: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    spaces: {
        type: String,
        required: true
    },
    alcohol: {
        type: String,
        required: true
    },
    quoted: {
        type: String,
        required: true
    },
    tourDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    last_updated: {
        type: String,
        required: true
    } 
});

const interestListModel = mongoose.model("interest_list", interestListSchema)
module.exports = interestListModel