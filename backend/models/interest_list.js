const mongoose = require('mongoose');

const interestListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    eventType: {
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
    lastUpdated: {
        type: String,
        required: true
    } 
});

const interestListModel = mongoose.model("interest lists", interestListSchema);
module.exports = interestListModel;