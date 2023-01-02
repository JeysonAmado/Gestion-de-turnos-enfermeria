const Boom = require("@hapi/boom");
const { Chance } = require("chance");
let random = new Chance();

class NurseServices {

    constructor(){
        this.nurses = [];
        this.generate();
        
    }

    generate(){
        
        const limit= 100;
        for (let index = 0; index < limit; index++) {
    
            this.nurses.push({
                id: random.integer({ min: 0, max: 150 }),
                name: random.name(),
                gender: random.gender(),
                birthday: random.birthday({string: true}),
                block: random.bool()
            })
        } 
    }

    create(data){
        const newNurse={
            id: random.integer({ min: 0, max: 150 }),
            ...data
        }
        this.nurses.push(newNurse);
        return newNurse;
    }

    async index(){
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve(this.nurses);
            }, 5000);
        });
    }

    async find(id){
        

        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve(this.nurses.find(item => item.id == id));
            }, 5000);
        });
    }

    update(id,nurseUpdate){
        
        const nurseToUpdateIndex = this.nurses.findIndex(item => item.id == id);
        if(nurseToUpdateIndex == -1 ){
            throw Boom.notFound('Nurse not found');
        }
        if(this.nurses[nurseToUpdateIndex].block){
            throw Boom.conflict('Nurse not allowed');
        }
        const nurse = this.nurses[nurseToUpdateIndex];
        this.nurses[nurseToUpdateIndex] = {
            ...nurse,
            ...nurseUpdate
        };

        return this.nurses[nurseToUpdateIndex];
    }

    delete(id){
        const nurseToUpdateIndex = this.nurses.findIndex(item => item.id == id);
        if(nurseToUpdateIndex == -1 ){
            throw Boom.notFound('Nurse not found');
        }
        this.nurses.splice(nurseToUpdateIndex,1);
        return {id};
    }
}

module.exports = NurseServices