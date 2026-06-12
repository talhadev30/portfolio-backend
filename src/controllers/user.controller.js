const userModel = require("../models/user.model");

async function registerUser(req, res) {
    try {
        const { username, email, message } = req.body;

        const user = await userModel.create({
            username,
            email,
            message,
        });

        console.log(user);

        res.status(201).json({
            message: "massage sent successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "someting is wrong massage not send",
        });
    }
}

async function getallUser(req, res) {
    try {
        const user = await userModel.find();

        res.status(200).json({
            message: "User fetched successfully",
            user,
        });
    } catch (error) {
        console.error("Error fetching users:", error);

        res.status(500).json({
            message: "User fetched not successfully",
            error: error.message,
        });
    }
}

module.exports = { registerUser  , getallUser };