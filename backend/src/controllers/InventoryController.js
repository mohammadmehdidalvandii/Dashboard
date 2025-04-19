const inventoryModel = require('../models/Inventory');

exports.getAllInventory = async ()=>{
    const inventory = await inventoryModel.find().populate("productID");
    return inventory;
};

exports.getInventoryByName = async (name)=>{
    const inventory = await inventoryModel.find({name:name}).populate("productID");
    return inventory;
};

exports.createInventory = async (data)=>{
   const {productID, quantity, category, status, sku} =data;
    const newInventory = await inventoryModel.create({
        productID,
        quantity,
        category,
        status,
        sku,
        createdAt:new Date()
    });
    return newInventory;
}

exports.updateInventory = async (id , data)=>{
    const {productID, quantity, category, status} = data;
    const inventory = await inventoryModel.findOneAndUpdate({_id:id},{
        productID,
        quantity,
        category,
        status,
        updatedAt:new Date()
    } ,{new:true})
    return inventory
};

exports.deleteInventory = async (id)=>{
    const inventory = await inventoryModel.findOneAndDelete({_id:id})
    return inventory;
};