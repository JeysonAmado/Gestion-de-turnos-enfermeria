const express = require('express');
const NurseController = require('../Controller/NurseController');
const router = express.Router();

const controller= new NurseController();

router.get("/" , async (req,res) => {
    index_nurses=await controller.index();
    res.send(index_nurses);
});

router.get("/:idNurse/",async (req,res) => {
    const {idNurse} = req.params;
    nurseFound=await controller.find(idNurse);
    res.send(nurseFound);

});

router.post("/", (req,res) => {
    const body = req.body;
    newNurse=controller.create(body);
    res.status(201).json({
        message: newNurse
    });
});

router.patch("/:idNurse" , (req,res) => {
    const {idNurse} = req.params;
    const body = req.body;
    nurseFound=controller.update(idNurse,body);
    res.status(201).json({
        message: nurseFound
    });
});

router.delete("/:idNurse" , (req,res) => {
    const {idNurse} = req.params;
    nurseFound=controller.delete(idNurse);
    res.send(nurseFound);
})

module.exports = router;

