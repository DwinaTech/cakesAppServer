const express = require('express');
const { getCakes, getSingleCake, addCake, updateCake, deleteCake } = require('../controller/CakesController')

const router = express.Router();

// Get list of cakes
router.get('/cakes', async (req, res) => {
  try {
    const data = await getCakes();
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Get single cake full details
router.get('/cakes/:cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await getSingleCake(cakeId);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Edit single cake
router.put('/cakes/:cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await updateCake(cakeId, req.body);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Add new single cake
router.post('/cakes', async (req, res) => {
  const { name, comment, imageUrl } = req.body;
  try {
    const data = await addCake({ name, comment, imageUrl });
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

// Delete single cake
router.delete('/cakes/:cakeId', async (req, res) => {
  const { cakeId } = req.params;
  try {
    const data = await deleteCake(cakeId);
    res.status(200).json({ success: true, data})
  } catch (error) {
    await res.status(502).json({ message: "There is an error occurred", success: false, error })
  }
});

module.exports = router;
