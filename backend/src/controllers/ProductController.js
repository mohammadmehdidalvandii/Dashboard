const ProductsModel = require("../models/Products");

exports.getAllProduct  = async ()=>{
    const product = await ProductsModel.find();
    return product;
}

exports.getProductByID = async (id)=>{
    const product = await ProductsModel.findOne({_id:id});
    return product
}

exports.createProduct =  async (data)=>{
    const product = ProductsModel.create(data);
    return product;
}

exports.updateProduct = async (id , data) => {
    const {name , description , price , category , image , stock , status} = data;
    const product = await ProductsModel.findOneAndUpdate(
        {_id:id},
        {
            name ,
            description ,
            price ,
            category ,
            image ,
            stock ,
            status ,
            updatedAt: new Date(),
        },
        {new:true}
    );
    return product;
}