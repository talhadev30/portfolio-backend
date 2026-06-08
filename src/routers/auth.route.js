const express = require("express");
const { registerUser } = require("../controllers/user.controller");
const { getallUser } = require("../controllers/user.controller")


const router = express.Router();


router.post("/" , registerUser)
router.get("/all" , getallUser)


module.exports = router;