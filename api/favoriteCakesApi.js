const express = require('express');
const { getFavoriteCakes, getSingleFavoriteCake, addFavoriteCake, updateFavoriteCakeNum, deleteFavoriteCake } = require('../controller/FavoriteCakes')

const router = express.Router();

// Get list of favorite cakes
router.get('/favoritecakes', async (req, res) => {
  try {
    const data = await getFavoriteCakes();
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Get single single favorite cake full details
router.get('/favoritecakes:/cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await getSingleFavoriteCake(cakeId);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Edit single favorite cake
router.put('/favoritecakes/:cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await updateFavoriteCakeNum(cakeId);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Add new single favorite cake
router.post('/favoritecakes', async (req, res) => {
  const { name, comment, imageUrl, yumFactor } = req.body;
  try {
    const data = await addFavoriteCake({ name, comment, imageUrl, yumFactor });
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Delete single favorite single cake
router.delete('/favoritecakes/:cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await deleteFavoriteCake(cakeId);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

module.exports = router;
