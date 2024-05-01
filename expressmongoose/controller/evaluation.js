const express = require("express");
const router = express.Router();

const { createOne, findAll, findById } = require('../service/evaluation/CR_Evaluation');

router.post('/createOne', createOne);
router.get('/findAll', findAll);
router.get('/findById/:id', findById);
// router.get('/findByDbuId/:dbuId', findByDbuId);
// router.delete('/deleteById/:id', deleteById);
// router.put('/updateById/:id', updateById);

module.exports = router;
 
