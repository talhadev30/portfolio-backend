const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String
    }
});

const userModel = mongoose.model("User", usersSchema);

module.exports = userModel;