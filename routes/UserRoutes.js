const express = require('express');
const { getUsers, postUsers, deleteUsers, putUsers } = require('../controllers/userControllers')
const router = express.Router();


router.get('/', getUsers);
router.post('/', postUsers);
router.delete('/:id', deleteUsers);
router.put('/:id', putUsers);

module.exports = router;
