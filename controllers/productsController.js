const db = require('../db');
const firestore = db.firestore();


const getAllProduct = async(req, res, next) => {
    try {
        // const products = await firestore.collection('Products');
        const products = await getProducts()
            // const data = await products.doc();
            // console.log(products)
            // const allProduct = [];
        if (products.empty) {
            res.status(404).send({ "message": "No products recorded." })
        } else {
            // console.log(data)
            // allProduct.push(data.data())

            // res.status(201).send(allProduct)
            res.status(201).send(products)
        }
    } catch (error) {
        console.log("err")
        res.status(400).send({ "error": error.message })
    }
}

const products_by_ID = async(req, res, next) => {

}


async function getProducts() {
    const snapshot = await firestore.collection('products').get()
    return snapshot.docs.map(doc => doc.data());
}
module.exports = getAllProduct;