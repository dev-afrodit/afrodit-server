const admin = require("firebase-admin");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config()
const productRoutes = require('./routes/products-routes');

const PORT = process.env.PORT || 8080


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/api', productRoutes.routes);

app.listen(PORT, () => console.log(`Server started at ${PORT} port..`))