const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting db"));
db.once("open", () => console.log(`Connected to db ${db.name}`));
module.exports = db;
