const mongoose = require('mongoose');
const Loan = mongoose.model('Loan');

exports.getLoans = async (req, res) => {
    try {
        const loanId = req.params?.loanId;

        if (loanId) {

            // GET method that gets one loan object based on loanId
            const loan = await Loan.find({ loanId });
            return res.json({
                success: true,
                loan,
            });
        } else {

            // a GET method that gets all loan objects
            const loans = await Loan.find();
            return res.json({
                success: true,
                loans,
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            errMessage: "Error while fetching all loans!",
        });
    }
}

exports.createLoan = async (req, res) => {
    try {
        const newLoan = await new Loan(req.body).save();
        return res.json({
            success: true,
            loan: newLoan,
        });
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            errMessage: "Error while creating a new loan!",
        });
    }
}

exports.updateBorrower = async (req, res) => {
    try {
        const loanId = req.params?.loanId;
        const pairId = req.params?.pairId;
        const newBorrower = req.body;

        if (loanId && pairId && newBorrower) {
            const updatedBorrower = await Loan.updateOne({ 'loanId': loanId, 'borrowers.pairId': pairId }, {
                '$set': {
                    'borrowers.$.firstName': newBorrower.firstName,
                    'borrowers.$.lastName': newBorrower.lasstName,
                    'borrowers.$.phone': newBorrower.phone
                }
            });
            return res.json({
                success: true,
                borrower: updatedBorrower,
            });
        }

    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            errMessage: "Error while updating a borrower!",
        });
    }
}

exports.deleteLoan = async (req, res) => {
    try {
        const loanId = req.params?.loanId;

        if (loanId) {
            const deletedLoan = await Loan.deleteOne({ loanId });
            return res.json({
                success: true,
                loan: deletedLoan,
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            errMessage: "Error while deleting a loan!",
        });
    }
}
