const express = require('express');

const userDataController = require('../controllers/userDataController');

const router = express.Router();

router.get('/:id', userDataController.get);

router.post('/:id', userDataController.post);



module.exports = router;