const express = require('express');
const chance = require('chance');
const { Chance } = require('chance');
const router = express.Router();


router.get("/" , (request,response) => {
    let enfermeras = []
    const {size} = request.query;
    let random = new Chance();
    const limit= size || 10;
    for (let index = 0; index < limit; index++) {

        enfermeras.push({
            name: random.name(),
            gender: random.gender(),
            birthday: random.birthday({string: true})
            //name: 'Andrea'
        })
    } 
    response.json(enfermeras);
});

router.get("/:idEnfermera/", (request,response) => {
    const {idEnfermera} = request.params;

    response.json(
        {
            idEnfermera,
            name: 'Jimena',
            area: 'Pediatria'
        }
    );

});

router.post("/", (req,res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Created',
        data: body
    });
});

router.patch("/:idNurse" , (req,res) => {
    const { idNurse } = req.params;
    const body = req.body;
    if(idNurse=999){
        res.status(404).json({
            message: 'Not Found',
        data: body, idNurse
        })
    }
    res.json({
        message: 'Update',
        data: body, idNurse
    });
});

router.delete("/:idNurse" , (req,res) => {
    const { idNurse } = req.params;
    const body = req.body;
    res.json({
        message: 'Delete',
        data: body, idNurse
    });
})

module.exports = router;

