const {Bed, BedSchema } = require('./BedsModel');
const { NurseArea, NurseAreaSchema } = require('./NurseArea');
const { NurseCharge, NurseChargeSchema } = require('./NurseChargeModel');
const { Nurse, NurseSchema } = require('./NurseModel');
const { NurseShift, NurseShiftSchema } = require('./NurseShift');
const { Pacient, PacientSchema } = require('./PacientModel');
const { SeverityLevel, SeverityLevelSchema } = require('./SeverityLevelModel');

function setupModels(sequelize){
    SeverityLevel.init(SeverityLevelSchema,SeverityLevel.config(sequelize));
    Bed.init(BedSchema, Bed.config(sequelize));
    //NurseArea.init(NurseAreaSchema,NurseArea.config(sequelize));
    //NurseCharge.init(NurseChargeSchema,NurseCharge.config(sequelize));
    //NurseShift.init(NurseShiftSchema,NurseShift.config(sequelize));
    //Nurse.init(NurseSchema,Nurse.config(sequelize));
    Pacient.init(PacientSchema,Pacient.config(sequelize));

   associateModels(sequelize);
}

function associateModels(sequelize){
    SeverityLevel.associate(sequelize.models);
    Bed.associate(sequelize.models);
    //NurseArea.associate(sequelize.models);
    //NurseCharge.associate(sequelize.models);
    //NurseShift.associate(sequelize.models);
    Nurse.associate(sequelize.models);
    Pacient.associate(sequelize.models);

}


module.exports = setupModels;