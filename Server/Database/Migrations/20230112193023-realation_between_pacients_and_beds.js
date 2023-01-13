'use strict';

const { BEDS_TABLE } = require('../../Model/Pacients/BedsModel');
const { PACIENT_TABLE, PacientSchema } = require('../../Model/Pacients/PacientModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(PACIENT_TABLE, 'bed_assigned_id',PacientSchema.bed_assigned_id);
      
      await queryInterface.addConstraint(PACIENT_TABLE,{
        fields: ['bed_assigned_id'],
        type: 'foreign key',
        references:{
          table: BEDS_TABLE,
          field: 'id'
        },
        onDelete: 'SET NULL'
      });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeColumn(PACIENT_TABLE,'bed_assigned_id');

  }
};
