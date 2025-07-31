const express = require('express');
const app = express();
const authRoute = require('./routes/authRoute')
const PORT = 2999;


app.use(express.json())
app.use(express.static("public"))
app.use(authRoute)



app.use((req, res) => {
    res.status(404).send("Oops.. Something went wrong!");
});

app.use((err, req, res, next) => {
    res.status(500).send("Server Error: Please check the backend logs for more info.");
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`);
});