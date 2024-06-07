require("dotenv").config();

const uri = process.env.CONNECTION_STRING
const connect = () => {
    const mongoose = require("mongoose");
    mongoose
        .connect(uri)
        .then(() => console.log("mongo connected"))
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
};
module.exports = {
    connect

};
