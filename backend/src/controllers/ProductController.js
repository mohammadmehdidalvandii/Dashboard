const ProductsModel = require("../models/Products");

exports.createProduct =  async (data)=>{
    const product = ProductsModel.create(data);
    return product;
}