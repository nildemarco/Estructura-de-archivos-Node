const express = require('express');
const { getGatitos, postGatitos, deleteGatitos, putGatitos, patchGatito } = require('../controllers/gatitosControllers')
const router = express.Router();


router.get('/', getGatitos);
router.post('/', postGatitos);
router.delete('/:id', deleteGatitos);
router.put('/:id', putGatitos);
router.patch('/:id', patchGatito)

module.exports = router;
