const ProductModel = require('../model/productModel');

// Get All Products
const allProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single Product
const getSingleProduct = async (req, res, next) => {
  try {
    // "productId" is same as route "productId"
    const product = await ProductModel.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};
// Add New Product
const addNewProduct = async (req, res, next) => {
  const product = new ProductModel({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details,
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Update Product
const updateProduct = async (req, res, next) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      // "_id" taken from mongodb id
      { _id: req.params.productId },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};
// Delete Product
const deleteProduct = async (req, res, next) => {
  try {
    const removeProduct = await ProductModel.findByIdAndDelete(
      req.params.productId
    );
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  allProducts,
  getSingleProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
