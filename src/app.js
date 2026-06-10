const express = require("express");
const dns = require("dns")
const dotenv = require("dotenv")
const connectdb = require("./db/db")
const authroute = require("./routers/auth.route")
const cors = require("cors");


dotenv.config();
dns.setServers(["8.8.8.8"])
connectdb()


const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/auth", authroute);



module.exports = { app };