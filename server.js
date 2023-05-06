const express = require('express');
const path = require('path');

let initPath = __dirname

const app = express();
app.use(express.static(initPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initPath,"/pages/index.html"))
})

app.listen("3000", () => {
    console.log("listening...");
})