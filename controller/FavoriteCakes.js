const FavoriteCake = require('../models/FavoriteCakes');
require('../db/connection');

async function getFavoriteCakes() {
    try {
        const response = await FavoriteCake.find({});
        return response;
    } catch (error) {
        return error;
    }
}

async function getSingleFavoriteCake(cakeId) {
    try {
        const response = await FavoriteCake.findById(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

async function addFavoriteCake(data) {
    try {
        const newCakes = new FavoriteCake(data);
        const response = await newCakes.save()
        return response;
    } catch (error) {
        return error;
    }
}

async function updateFavoriteCakeNum(cakeId) {
    try {
        const response = await FavoriteCake.findByIdAndUpdate(cakeId);
        return response;
    } catch (error) {
        return error;
    }
}

async function deleteFavoriteCake(cakeId) {
    try {
        const response = await FavoriteCake.findByIdAndRemove(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getFavoriteCakes,
    getSingleFavoriteCake,
    addFavoriteCake,
    updateFavoriteCakeNum,
    deleteFavoriteCake
}