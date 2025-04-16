const OrdersModel = require('../models/Orders');

exports.getAllOrders = async ()=>{
    const orders = await OrdersModel.find()
        .populate('customerID', 'firstName lastName email phone')
        .populate('products.productID', 'name price image ');
    return orders
};

exports.getOrderById = async (id)=>{
    const order = await OrdersModel.findOne({_id:id})
    .populate('customerID', 'firstName lastName email phone')
    .populate('products.productID', 'name price image ');
    return order;
};

exports.createOrder = async (data)=>{
    const {
        customerID,
        products,
        status,
        shippingAddress,
    } = data;
    const newOrder = await OrdersModel.create({
        customerID,
        products,
        status,
        shippingAddress,
        createdAt:new Date(),
    });
    return newOrder;
}

exports.deleteOrderById = async(id)=>{
    const order = await OrdersModel.findOneAndDelete({_id:id});
    return order;
}