const {Bed, BedSchema } = require('./Pacients/BedsModel');
const { NurseArea, NurseAreaSchema } = require('./Nurses/NurseAreaModel');
const { NurseCharge, NurseChargeSchema } = require('./Nurses/NurseChargeModel');
const { Nurse, NurseSchema } = require('./Nurses/NurseModel');
const { NurseShift, NurseShiftSchema } = require('./Nurses/NurseShiftModel');
const { Pacient, PacientSchema } = require('./Pacients/PacientModel');
const { SeverityLevel, SeverityLevelSchema } = require('./Pacients/SeverityLevelModel');
const { Bath, BathSchema } = require('./Procediments/BathModel');
const { BathType, BathTypeSchema } = require('./Procediments/ProcedimentsTypes/BathTypesModel');
const { Canalization, CanalizationSchema } = require('./Procediments/CanalizationModel');
const { DiagnosticImage, DiagnosticImagesSchema } = require('./Procediments/DiagnosticImageModel');
const { DiagnosticImageType, DiagnosticImagesTypeSchema } = require('./Procediments/ProcedimentsTypes/DiagnosticImagesTypesModel');
const { Laboratory, LaboratorySchema } = require('./Procediments/LaboratoryModel');
const { LaboratoryType, LaboratoryTypeSchema } = require('./Procediments/ProcedimentsTypes/LaboratoryTypeModel');
const { MedicineSupplied, MedicineSuppliedSchema } = require('./Procediments/MedicineSuppliedModel');
const { Probe, ProbeSchema } = require('./Procediments/ProbeModel');
const { ProbeType, ProbeTypeSchema } = require('./Procediments/ProcedimentsTypes/ProbesTypeModel');
const { ShiftCheckUp, ShiftCheckUpSchema } = require('./Procediments/ShiftsCheckUpModel');
const { Signals, SignalsSchema } = require('./Procediments/SignalsModel');

function setupModels(sequelize){
    SeverityLevel.init(SeverityLevelSchema,SeverityLevel.config(sequelize));
    Bed.init(BedSchema, Bed.config(sequelize));
    NurseArea.init(NurseAreaSchema,NurseArea.config(sequelize));
    NurseCharge.init(NurseChargeSchema,NurseCharge.config(sequelize));
    NurseShift.init(NurseShiftSchema,NurseShift.config(sequelize));
    Nurse.init(NurseSchema,Nurse.config(sequelize));
    Pacient.init(PacientSchema,Pacient.config(sequelize));

    //Procediments
    Bath.init(BathSchema,Bath.config(sequelize));
    BathType.init(BathTypeSchema,BathType.config(sequelize));
    Canalization.init(CanalizationSchema,Canalization.config(sequelize));
    DiagnosticImage.init(DiagnosticImagesSchema,DiagnosticImage.config(sequelize));
    DiagnosticImageType.init(DiagnosticImagesTypeSchema,DiagnosticImageType.config(sequelize));
    Laboratory.init(LaboratorySchema, Laboratory.config(sequelize));
    LaboratoryType.init(LaboratoryTypeSchema,LaboratoryType.config(sequelize));
    MedicineSupplied.init(MedicineSuppliedSchema,MedicineSupplied.config(sequelize));
    Probe.init(ProbeSchema,Probe.config(sequelize));
    ProbeType.init(ProbeTypeSchema,ProbeType.config(sequelize));
    ShiftCheckUp.init(ShiftCheckUpSchema,ShiftCheckUp.config(sequelize));
    Signals.init(SignalsSchema,Signals.config(sequelize));

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