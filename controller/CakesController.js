const Cakes = require('../models/CakesSchema');
require('../db/connection');

// Cakes reset API functions controller

// Get list of cakes from db
async function getCakes() {
    try {
        const response = await Cakes.find({});
        return response;
    } catch (error) {
        return error;
    }
}

// Get single cake from db
async function getSingleCake(cakeId) {
    try {
        const response = await Cakes.findById(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

// Add single cake to db
async function addCake(data) {
    try {
        const newCakes = new Cakes(data);
        const response = await newCakes.save()
        return response;
    } catch (error) {
        return error;
    }
}

// Update single cake
async function updateCake(cakeId, data) {
    try {
        const response = await Cakes.findByIdAndUpdate(cakeId, data, {new: true});
        return response;
    } catch (error) {
        return error;
    }
}

// Delete single cake from db
async function deleteCake(cakeId) {
    try {
        const response = await Cakes.findByIdAndRemove(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

// export all functions to use at different files
module.exports = {
    addCake,
    getCakes,
    deleteCake,
    updateCake,
    getSingleCake
}
