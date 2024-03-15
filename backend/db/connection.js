const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect("mongodb+srv://quickboard:quickboard123@cluster0.gfsc51m.mongodb.net/Quickboard");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Database connected");
        });

        connection.on("error", () => {
            console.log("Error connecting to database");
            process.exit();
        });
    } catch (error) {
        console.log("Error connecting to database");
    }
}

module.exports = { connect };
