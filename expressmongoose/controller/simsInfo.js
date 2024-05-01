const express = require("express");
const router = express.Router();

const { createOne, findAll, findById, findByDbuId} = require('../service/SIMS/CR_SIMS_Info');
const {  deleteById, updateById } = require('../service/SIMS/DU_SIMS_Info');

router.post('/createOne', createOne);
router.get('/findAll', findAll);
router.get('/findById/:id', findById);
router.get('/findByDbuId/:dbuId', findByDbuId);
router.delete('/deleteById/:id', deleteById);
router.put('/updateById/:id', updateById);

module.exports = router;
 