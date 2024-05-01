const express = require("express");
const router = express.Router();

const { findAll, findByDbuId, findById,  deleteById, updateById} = require('../service/user/userInfo');

router.get('/findAll', findAll);
router.get('/findByDbuId/:dbuId', findByDbuId);
router.get('/findById/:id', findById);
router.delete('/deleteById/:id', deleteById);
router.put('/updateById/:id', updateById);

module.exports = router;
 