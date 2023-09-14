const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')
const app = express()
const port = 4000

connectToMongo();

// Midleware
app.use(cors())
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Port listen on http://localhost:${port}`)
})
