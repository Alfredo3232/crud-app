const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000

const pathToClient = path.join(__dirname, './index.html')

app.use(express.static(__dirname + "./index.html"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + './index.html');
});

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`)
})