const express = require('express');
const app = express();
const port = 3000;
const isLocal = process.env.NODE_ENV !== "production";
const MonoDB = require('./config/mongodb');
const Mongoose = require('./config/mongoose');

// app.get('/', (req, res) => {
// 	res.json({
// 		message: "✨ 👋🌏 ✨",
// 		stage: process.env.NODE_ENV,
// 	});
// });

// app.get("/ping", (req, res) => {
// 	res.json({
// 		message: "🏓",
// 	});
// });

// initialize database.
MonoDB();
Mongoose();

//load the routes
require('./routes/Loan.routes')(app);

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
