const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

router.get('/', locationController.getLocation);
router.post('/create', locationController.createLocation);
router.delete('/delete', locationController.deleteAllLocations); // ✅ đây phải là function hợp lệ

module.exports = router;
