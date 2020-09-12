const express = require('express');
const { getRefugios, postRefugios, deleteRefugios, putRefugios } = require('../controllers/refugiosControllers')
const router = express.Router();


router.get('/', getRefugios);
router.post('/', postRefugios);
router.delete('/:id', deleteRefugios);
router.put('/:id', putRefugios);

module.exports = router;
