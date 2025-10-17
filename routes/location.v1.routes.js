var express = require('express');
var router = express.Router();
var locationController = require('../controller/location.controller');
//get all location
router.get('/', locationController.getlocations);
//cteate all location
router.post('/create', locationController.createlocations);
router.delete('/delete', locationController.deletelocations);

module.exports = router;