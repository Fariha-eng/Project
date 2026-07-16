const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const app = express()

// Connect MongoDB
connectDB()

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      process.env.CLIENT_URL
    ].filter(Boolean),
    credentials: true
  })
)

app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/doctors', require('./routes/doctorRoutes'))
app.use('/api/tokens', require('./routes/tokenRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Smart Queue Backend Running!'
  })
})

// Root Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Smart Queue Backend Running!'
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err)

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  })
})

const PORT = process.env.PORT || 5000

// Run locally only
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Export for Vercel
module.exports = app