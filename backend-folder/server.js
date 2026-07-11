const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connect
connectDB()

// Routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/doctors', require('./routes/doctorRoutes'))
app.use('/api/tokens', require('./routes/tokenRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Smart Queue Backend Running!' })
})

// Port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})