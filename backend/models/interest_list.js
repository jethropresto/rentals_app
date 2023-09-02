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
        type: String
    },
    tourDate: {
        type: String
    },
    status: {
        type: String
    },
    lastUpdated: {
        type: String,
        required: true
    } 
});

const interestListModel = mongoose.model("interest lists", interestListSchema);
module.exports = interestListModel;