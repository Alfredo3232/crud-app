const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static(__dirname + "/../client"))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/../client')
})

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`)
})