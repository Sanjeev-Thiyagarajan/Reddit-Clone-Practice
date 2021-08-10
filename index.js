// import express
const express = require('express')

// create an express instance
const app = express();

app.get('/', (req, res) => {
    res.send("<h2>This is my first express project</h2>")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})