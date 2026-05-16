require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const app = express()

app.use(cors())

connectDB()

app.get('/', (req, res) => {
  res.send('Backend Running Successfully')
})

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Backend + MongoDB Running',
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
