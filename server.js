const express = require("express");
const coneectDB = require("./config/db");

const app = express();

//Connect Database
coneectDB();

//Init Middleware
app.use(express.json({ extend: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the API....." }));

//Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever Start on port ${PORT}`));
