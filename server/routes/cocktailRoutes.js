const express = require('express');
const router = express.Router();
const cocktailController = require('../controllers/cocktailController');

/**
 * App Routes
 */
router.get('/', cocktailController.homepage);
router.get('/ingredient_browser', cocktailController.ingredients);
router.get('/:cocktailName', cocktailController.detail);
router.post('/search', cocktailController.search);

module.exports = router;
