const express = require("express");
const cors = require("cors");

//Routes
const accountsRoutes = require("./src/accounts/routes");

const app = express();
const port = 9021;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

//route
app.get("/", (req, res)=> {
    res.send("Who will the Super Bowl??");
})

app.use("/api/accounts", accountsRoutes);

app.listen(port, () => console.log('running on ${port}'));