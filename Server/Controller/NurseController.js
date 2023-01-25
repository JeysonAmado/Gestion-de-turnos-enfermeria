const { sequelize } = require("../Database/DatabaseConnection");



class NurseController {

    
    constructor(){
        
    }

    create(data){
        const newNurse='Nuevo enfermer@' + data;
        return newNurse;
    }

    async index(){
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                
                const laboratories_types = sequelize.models.LaboratoryTypes.findAll();
                //const nurses = models.Beds.findAll();
                resolve(laboratories_types);
            }, 2000);
        });
    }

    async find(id){
                return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve('SE ENCONTRÓ ENFERMER@ '+id);
            }, 2000);
        });
    }

    update(id,nurseUpdate){
        
        return 'ENFERMER@ ID: '+ id + 'se le actualizó' + nurseUpdate;
    }

    delete(id){
        return 'SE ELIMINÓ ENFERMER@ '+id;
    }
}
    


module.exports = NurseController