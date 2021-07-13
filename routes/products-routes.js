const express = require('express');
const getAllProduct = require('../controllers/productsController');

const router = express.Router();

router.get('/products', getAllProduct);

module.exports = {
    routes: router
}