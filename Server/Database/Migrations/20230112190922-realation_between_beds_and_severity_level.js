'use strict';

const { BEDS_TABLE, BedSchema } = require('../../Model/BedsModel');
const { SEVERITY_LEVEL_TABLE } = require('../../Model/SeverityLevelModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.addColumn(BEDS_TABLE, 'severity_level_id',BedSchema.severity_level_id);
      
      await queryInterface.addConstraint(BEDS_TABLE,{
        fields: ['severity_level_id'],
        type: 'foreign key',
        references:{
          table: SEVERITY_LEVEL_TABLE,
          field: 'id'
        },
        onDelete: 'SET NULL'
      });

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn(BEDS_TABLE,'severity_level_id');
  }
};
