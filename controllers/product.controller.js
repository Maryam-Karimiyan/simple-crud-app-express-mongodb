const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const pros = await Product.find({});
    res.status(200).json(pros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await Product.findById(id);
    return res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const pro = await Product.create(req.body);
    return res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await Product.findByIdAndUpdate(id, req.body);
    if (!pro) {
      return res.status(404), json({ message: "No Product Found!" });
    }
    const updatedPro = await Product.findById(id);

    return res.status(200).json(updatedPro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await Product.findByIdAndDelete(id);
    if (!pro) {
      return res.status(404), json({ message: "No Product Found!" });
    }

    return res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
