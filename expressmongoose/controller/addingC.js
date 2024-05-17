const express = require("express");
const router = express.Router();

const { createOne, findAll } = require('../service/addingC/AddingCriteria');
// , findAll, findById
router.post('/createOne', createOne);
router.get('/findAll', findAll);
// router.get('/findById/:id', findById);
// router.delete('/deleteById/:id', deleteById);

// router.get('/findByDbuId/:dbuId', findByDbuId);
// router.delete('/deleteById/:id', deleteById);
// router.put('/updateById/:id', updateById);

module.exports = router;