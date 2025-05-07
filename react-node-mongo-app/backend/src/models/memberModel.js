const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[A-Za-z0-9]+$/  // Alphanumeric validation
    },
    profileImage: {
        type: String,
        required: false
    }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;