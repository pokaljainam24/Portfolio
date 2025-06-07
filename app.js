const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); 

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const Mainrouter = require("./routers/index");
const Mailrouter = require("./routers/mailRoutes");

app.use("/", Mainrouter);
app.use("/", Mailrouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
