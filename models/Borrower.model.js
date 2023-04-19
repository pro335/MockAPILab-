const mongoose = require('mongoose');

const BorrowerSchema = new mongoose.Schema({
    pairId: {
        type: Number,
        default: 123456,
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
});

const Borrower = mongoose.model('Borrower', BorrowerSchema);

module.exports = Borrower;