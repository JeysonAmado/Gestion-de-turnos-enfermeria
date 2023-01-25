'use strict';

const { NURSE_TABLE } = require('../../Model/Nurses/NurseModel');
const { PACIENT_TABLE } = require('../../Model/Pacients/PacientModel');
const { BATH_TABLE, BathSchema } = require('../../Model/Procediments/BathModel');
const { CANALIZATION_TABLE, CanalizationSchema } = require('../../Model/Procediments/CanalizationModel');
const { DIAGNOSTIC_IMAGES_TABLE, DiagnosticImagesSchema } = require('../../Model/Procediments/DiagnosticImageModel');
const { LABORATORY_TABLE, LaboratorySchema } = require('../../Model/Procediments/LaboratoryModel');
const { MEDICINE_SUPPLIED_TABLE, MedicineSuppliedSchema } = require('../../Model/Procediments/MedicineSuppliedModel');
const { PROBE_TABLE, ProbeSchema } = require('../../Model/Procediments/ProbeModel');
const { BATH_TYPE_TABLE, BathTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/BathTypesModel');
const { DIAGNOSTIC_IMAGES_TYPE_TABLE, DiagnosticImagesTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/DiagnosticImagesTypesModel');
const { LABORATORY_TYPE_TABLE, LaboratoryTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/LaboratoryTypeModel');
const { PROBE_TYPE_TABLE, ProbeTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/ProbesTypeModel');
const { SHIFT_CHECK_UP_TABLE, ShiftCheckUpSchema } = require('../../Model/Procediments/ShiftsCheckUpModel');
const { SIGNALS_TABLE, SignalsSchema } = require('../../Model/Procediments/SignalsModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
    await queryInterface.createTable(BATH_TYPE_TABLE,BathTypeSchema);
    await queryInterface.createTable(BATH_TABLE,BathSchema);
    await queryInterface.createTable(CANALIZATION_TABLE,CanalizationSchema);
    await queryInterface.createTable(DIAGNOSTIC_IMAGES_TABLE,DiagnosticImagesSchema);
    await queryInterface.createTable(DIAGNOSTIC_IMAGES_TYPE_TABLE,DiagnosticImagesTypeSchema);
    await queryInterface.createTable(LABORATORY_TABLE,LaboratorySchema);
    await queryInterface.createTable(LABORATORY_TYPE_TABLE,LaboratoryTypeSchema);
    await queryInterface.createTable(MEDICINE_SUPPLIED_TABLE,MedicineSuppliedSchema);
    await queryInterface.createTable(PROBE_TABLE,ProbeSchema);
    await queryInterface.createTable(PROBE_TYPE_TABLE,ProbeTypeSchema);
    await queryInterface.createTable(SHIFT_CHECK_UP_TABLE,ShiftCheckUpSchema);
    await queryInterface.createTable(SIGNALS_TABLE,SignalsSchema);
    
    await queryInterface.addConstraint(SHIFT_CHECK_UP_TABLE,{
      fields: ['pacient_id'],
      type: 'foreign key',
      references:{
        table: PACIENT_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(SHIFT_CHECK_UP_TABLE,{
      fields: ['nurse_id'],
      type: 'foreign key',
      references:{
        table: NURSE_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(BATH_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(BATH_TABLE,{
      fields: ['bath_type_id'],
      type: 'foreign key',
      references:{
        table: BATH_TYPE_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(CANALIZATION_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(DIAGNOSTIC_IMAGES_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(DIAGNOSTIC_IMAGES_TABLE,{
      fields: ['diagnostic_image_type_id'],
      type: 'foreign key',
      references:{
        table: DIAGNOSTIC_IMAGES_TYPE_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(LABORATORY_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(LABORATORY_TABLE,{
      fields: ['laboratory_type_id'],
      type: 'foreign key',
      references:{
        table: LABORATORY_TYPE_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(MEDICINE_SUPPLIED_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(PROBE_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(PROBE_TABLE,{
      fields: ['probe_type_id'],
      type: 'foreign key',
      references:{
        table: PROBE_TYPE_TABLE,
        field: 'id'
      },
    });

    await queryInterface.addConstraint(SIGNALS_TABLE,{
      fields: ['shifts_check_up_id'],
      type: 'foreign key',
      references:{
        table: SHIFT_CHECK_UP_TABLE,
        field: 'id'
      },
    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(BATH_TYPE_TABLE);
    await queryInterface.dropTable(BATH_TYPE_TABLE);
    await queryInterface.dropTable(CANALIZATION_TABLE);
    await queryInterface.dropTable(DIAGNOSTIC_IMAGES_TABLE);
    await queryInterface.dropTable(DIAGNOSTIC_IMAGES_TYPE_TABLE);
    await queryInterface.dropTable(LABORATORY_TABLE);
    await queryInterface.dropTable(LABORATORY_TYPE_TABLE);
    await queryInterface.dropTable(MEDICINE_SUPPLIED_TABLE);
    await queryInterface.dropTable(PROBE_TABLE);
    await queryInterface.dropTable(PROBE_TYPE_TABLE);
    await queryInterface.dropTable(SHIFT_CHECK_UP_TABLE);
    await queryInterface.dropTable(SIGNALS_TABLE);

  }
};
