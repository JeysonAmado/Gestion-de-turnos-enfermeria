const express = require('express');
const validatorHandler = require('../Middlewares/ValidatorHandler');
const { createNurseSchema,updateNurseSchema,getNurseSchema } = require('../Schemas/NurseSchema');
const NurseServices = require('./../Services/NurseService');
const router = express.Router();
const service = new NurseServices();


router.get("/" , async (request,response) => {
    const enfermeras = await service.index(); 
    response.json(enfermeras);
});

router.get("/:idEnfermera/", validatorHandler.validatorHandler(getNurseSchema,'params'),
async (request,response) => {
    const {idEnfermera} = request.params;
    const nurse = await service.find(idEnfermera);
    response.json(nurse);
});

router.post("/", (req,res) => {
    const body = req.body;
    newNurse = service.create(body);
    res.status(201).json(newNurse);
});

router.patch("/:idEnfermera" , (req,res,next) => {
    try {
        const { idEnfermera } = req.params;
        const body = req.body;
        nurseUpdated = service.update(idEnfermera,body); 
        res.json(nurseUpdated);
    } catch (error) {
        next(error);
    }
    
});

router.delete("/:idNurse" , (req,res,next) => {
    try {
        const { idNurse } = req.params;
        const body = req.body;
        nurseDeleted = service.delete(idNurse);
        res.json({
            message: 'Delete',
            data: nurseDeleted 
        });
    } catch (error) {
        next(error);
    }
    
})

module.exports = router;

