const FavoriteCake = require('../models/FavoriteCakes');
require('../db/connection');

// Favorite cakes reset API functions controller

// Get list of favorite cakes from db
async function getFavoriteCakes() {
    try {
        const response = await FavoriteCake.find({});
        return response;
    } catch (error) {
        return error;
    }
}

// Get single favorite cake full details from db
async function getSingleFavoriteCake(cakeId) {
    try {
        const response = await FavoriteCake.findById(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

// Add new single favorite cake to db
async function addFavoriteCake(data) {
    try {
        const newCakes = new FavoriteCake(data);
        const response = await newCakes.save()
        return response;
    } catch (error) {
        return error;
    }
}

// Update single favorite cake
async function updateFavoriteCakeNum(cakeId) {
    try {
        const response = await FavoriteCake.findByIdAndUpdate(cakeId);
        return response;
    } catch (error) {
        return error;
    }
}

// Delete single favorite cake from db
async function deleteFavoriteCake(cakeId) {
    try {
        const response = await FavoriteCake.findByIdAndRemove(cakeId)
        return response;
    } catch (error) {
        return error;
    }
}

// export all functions to use at different files
module.exports = {
    getFavoriteCakes,
    getSingleFavoriteCake,
    addFavoriteCake,
    updateFavoriteCakeNum,
    deleteFavoriteCake
}
