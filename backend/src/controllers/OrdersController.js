const OrdersModel = require('../models/Orders');

exports.getAllOrders = async ()=>{
    const orders = await OrdersModel.find();
    return orders
};

exports.getOrderById = async (id)=>{
    const order = await OrdersModel.findOne({_id:id});
    return order;
};

exports.createOrder = async (data)=>{
    const {
    customerID,
    productID,
    status,
    totalAmount,
    shippingAddress,
    } = data;
    const newOrder = await OrdersModel.create({
        customerID,
        productID,
        status,
        totalAmount,
        shippingAddress,
        createdAt:new Date(),
    });
    return newOrder;
}

exports.deleteOrderById = async(id)=>{
    const order = await OrdersModel.findOneAndDelete({_id:id});
    return order;
}