'use strict';

const { BEDS_TABLE, BedSchema } = require('../../Model/Pacients/BedsModel');
const { NURSE_AREA_TABLE, NurseAreaSchema } = require('../../Model/Nurses/NurseAreaModel');
const { NURSE_CHARGE_TABLE, NurseChargeSchema } = require('../../Model/Nurses/NurseChargeModel');
const { NURSE_TABLE, NurseSchema } = require('../../Model/Nurses/NurseModel');
const { NURSE_SHIFT_TABLE, NurseShiftSchema } = require('../../Model/Nurses/NurseShiftModel');
const { PACIENT_TABLE, PacientSchema } = require('../../Model/Pacients/PacientModel');
const { SEVERITY_LEVEL_TABLE, SeverityLevelSchema } = require('../../Model/Pacients/SeverityLevelModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(NURSE_TABLE,NurseSchema);
    await queryInterface.createTable(NURSE_CHARGE_TABLE,NurseChargeSchema);
    await queryInterface.createTable(NURSE_AREA_TABLE,NurseAreaSchema);
    await queryInterface.createTable(NURSE_SHIFT_TABLE,NurseShiftSchema);
    await queryInterface.createTable(PACIENT_TABLE,PacientSchema);
    await queryInterface.createTable(BEDS_TABLE,BedSchema);
    await queryInterface.createTable(SEVERITY_LEVEL_TABLE,SeverityLevelSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(NURSE_TABLE);
    await queryInterface.dropTable(NURSE_CHARGE_TABLE);
    await queryInterface.dropTable(NURSE_AREA_TABLE);
    await queryInterface.dropTable(NURSE_SHIFT_TABLE);
    await queryInterface.dropTable(PACIENT_TABLE);
    await queryInterface.dropTable(BEDS_TABLE);
    await queryInterface.dropTable(SEVERITY_LEVEL_TABLE);
  }
};
