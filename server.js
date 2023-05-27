const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoutes')

require('dotenv').config()
const cors = require("cors");

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).
    then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('error: ' + err))

app.use(routes)
app.listen(PORT, () => console.log(`Server is Listening Port: ${PORT}`))