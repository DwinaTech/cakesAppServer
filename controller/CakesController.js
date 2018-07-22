const Cakes = require('../models/CakesSchema');
require('../db/connection');

async function getCakes() {
    try {
        const response = await Cakes.find({});
        return response;
    } catch (error) {
        return error;
    }
}

async function getSingleCake(cakeId) {
    try {
        const response = await Cakes.findById(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

async function addCake(data) {
    try {
        const newCakes = new Cakes(data);
        const response = await newCakes.save()
        return response;
    } catch (error) {
        return error;
    }
}

async function updateCake(cakeId, data) {
    try {
        const response = await Cakes.findByIdAndUpdate(cakeId, data, {new: true});
        return response;
    } catch (error) {
        return error;
    }
}

async function deleteCake(cakeId) {
    try {
        const response = await Cakes.findByIdAndRemove(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    addCake,
    getCakes,
    deleteCake,
    updateCake,
    getSingleCake
}
