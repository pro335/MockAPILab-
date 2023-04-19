const loanController = require("../controllers/Loan.controller");
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

module.exports = (app) => {
    app.get("/", loanController.getLoans);
    app.get("/:loanId", loanController.getLoans);
    app.post("/", jsonParser, loanController.createLoan);
    app.patch("/:loanId/:pairId", jsonParser, loanController.updateBorrower);
    app.delete("/:loanId", jsonParser, loanController.deleteLoan);
}