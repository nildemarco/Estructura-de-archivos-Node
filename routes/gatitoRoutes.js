const express = require('express');
const { getGatitos, postGatitos, deleteGatitos, putGatitos } = require('../controllers/gatitosControllers')
const router = express.Router();


router.get('/', getGatitos);
router.post('/', postGatitos);
router.delete('/:id', deleteGatitos);
router.put('/:id', putGatitos);

module.exports = router;
