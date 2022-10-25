const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const userRoute = require("./routes/v1/users.routes.js");

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRoute);


app.all("*", (req, res) => {
    res.send("no route found")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})