const express = require('express');
const router = express.Router();
const cocktailController = require('../controllers/cocktailController');

/**
 * App Routes
 */
router.get('/', cocktailController.homepage);
router.get('/ingredient_browser', cocktailController.ingredients);
router.get('/about', cocktailController.about);
router.get('/contact', cocktailController.contact);
router.post('/contact', cocktailController.process_contact);
router.post('/getcocktails', cocktailController.getcocktails);
router.post('/search', cocktailController.search);
router.get('/:cocktailName', cocktailController.detail);

module.exports = router;
