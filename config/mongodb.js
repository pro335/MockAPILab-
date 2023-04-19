const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/mockAPILab";

module.exports = () => {
    return mongoose.connect(uri, { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected successfully!"))
        .catch(err => console.log(err));
}