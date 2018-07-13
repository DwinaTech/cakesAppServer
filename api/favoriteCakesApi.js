const express = require('express');
const { getFavoriteCakes, getSingleFavoriteCake, addFavoriteCake, updateFavoriteCakeNum, deleteFavoriteCake } = require('../controller/FavoriteCakes')

const router = express.Router();

router.get('/favoriteakes', async (req, res) => {
    try {
      const data = await getFavoriteCakes();
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.get('/favoriteakes:/cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await getSingleFavoriteCake(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.put('/favoriteakes/:cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await updateFavoriteCakeNum(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.post('/favoriteakes', async (req, res) => {
    console.log(req.body);
    
    const { name, comment, imageUrl } = req.body;
    try {
      const data = await addFavoriteCake({ name, comment, imageUrl });
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  router.delete('/favoriteakes/:cakeId', async (req, res) => {
    const { cakeId } = req.params;
    try {
      const data = await deleteFavoriteCake(cakeId);
      res.status(200).json({ success: true, data})
    } catch (error) {
      await res.status(502).json({ success: false, error })
    }
  });
  
  module.exports = router;