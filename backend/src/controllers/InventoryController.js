const inventoryModel = require('../models/Inventory');

exports.getAllInventory = async ()=>{
    const inventory = await inventoryModel.find().populate("productID");
    return inventory;
};

exports.getInventoryByName = async (name)=>{
    const inventory = await inventoryModel.find({name:name}).populate("productID");
    return inventory;
};

exports.updateInventory = async (id)=>{
    const inventory = await inventoryModel.findOneAndUpdate({_id:id})
    return inventory
};

exports.deleteInventory = async (id)=>{
    const inventory = await inventoryModel.findOneAndDelete({_id:id})
    return inventory;
};