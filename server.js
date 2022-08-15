const express = require('express');
const app = express()

const consultaNFCe = require("./consultaNFCe")

const port = process.env.PORT || 8080

// use JSON format
app.use(express.json())

// Rotes
app.post("/consultaNFCe", (req, res) => {
    consultaNFCe.getData(req.query.url).then( (data) => { return res.json(data) } )
})

// start server in port 8080
app.listen(port, () => { console.log(`Server is running in port ${port}`) })