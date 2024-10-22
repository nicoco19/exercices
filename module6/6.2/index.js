const express = require("express")
const personsRoutes = require('./routes/persons')
const mongoose = require('mongoose')

const PORT = 3001
const password = process.argv[2]
const MONGODB_URI = `mongodb+srv://nicolasventurini:${password}@web3react.hbhhe.mongodb.net/repertoireTelephonique?retryWrites=true&w=majority&appName=web3React`

mongoose.connect(MONGODB_URI)
console.log('Connected to MongoDB');
const app = express()

app.use(express.json())

// Disable CORS so that React client can freely access this server
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.set("Access-Control-Allow-Methods", "*")
  next()
})

app.use('/persons', personsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
