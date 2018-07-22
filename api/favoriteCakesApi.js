const express = require('express');
const { getFavoriteCakes, getSingleFavoriteCake, addFavoriteCake, updateFavoriteCakeNum, deleteFavoriteCake } = require('../controller/FavoriteCakes')

const router = express.Router();

router.get('/favoritecakes', async (req, res) => {
    try {
      const data = await getFavoriteCakes();
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.get('/favoritecakes:/cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await getSingleFavoriteCake(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.put('/favoritecakes/:cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await updateFavoriteCakeNum(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.post('/favoritecakes', async (req, res) => {
    const { name, comment, imageUrl, yumFactor } = req.body;
    try {
      const data = await addFavoriteCake({ name, comment, imageUrl, yumFactor });
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.delete('/favoritecakes/:cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await deleteFavoriteCake(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  module.exports = router;