const express = require("express");


const app = express();

app.get('/', (req,res) => {
    return res.send("home page!");
})
app.get('/about', (req,res) => {
    return res.send("hello from about page" + " hey " + req.query.name)
})

app.get('/user/:id', (req,res) => {
    return res.send(`User ID: ${req.params.id}`);
})



app.listen(8080, () => {
    console.log('server start');
})