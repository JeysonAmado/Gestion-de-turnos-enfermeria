const {Bed, BedSchema } = require('./Pacients/BedsModel');
const { NurseArea, NurseAreaSchema } = require('./Nurses/NurseAreaModel');
const { NurseCharge, NurseChargeSchema } = require('./Nurses/NurseChargeModel');
const { Nurse, NurseSchema } = require('./Nurses/NurseModel');
const { NurseShift, NurseShiftSchema } = require('./Nurses/NurseShiftModel');
const { Pacient, PacientSchema } = require('./Pacients/PacientModel');
const { SeverityLevel, SeverityLevelSchema } = require('./Pacients/SeverityLevelModel');

function setupModels(sequelize){
    SeverityLevel.init(SeverityLevelSchema,SeverityLevel.config(sequelize));
    Bed.init(BedSchema, Bed.config(sequelize));
    NurseArea.init(NurseAreaSchema,NurseArea.config(sequelize));
    NurseCharge.init(NurseChargeSchema,NurseCharge.config(sequelize));
    NurseShift.init(NurseShiftSchema,NurseShift.config(sequelize));
    Nurse.init(NurseSchema,Nurse.config(sequelize));
    Pacient.init(PacientSchema,Pacient.config(sequelize));

    //associateModels(sequelize);
}

function associateModels(sequelize){
    //SeverityLevel.associate(sequelize.models);
    //Bed.associate(sequelize.models);
    //NurseArea.associate(sequelize.models);
    //NurseCharge.associate(sequelize.models);
    //NurseShift.associate(sequelize.models);
    //Nurse.associate(sequelize.models);
    //Pacient.associate(sequelize.models);

}


module.exports = setupModels;