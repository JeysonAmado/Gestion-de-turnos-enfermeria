'use strict';

const { NURSE_AREA_TABLE } = require('../../Model/NurseArea');
const { NURSE_CHARGE_TABLE } = require('../../Model/NurseChargeModel');
const { NurseSchema, NURSE_TABLE } = require('../../Model/NurseModel');
const { NURSE_SHIFT_TABLE } = require('../../Model/NurseShift');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(NURSE_TABLE, 'area_id', NurseSchema.area_id);
    await queryInterface.addColumn(NURSE_TABLE, 'charge_id', NurseSchema.charge_id);
    await queryInterface.addColumn(NURSE_TABLE, 'shift_id', NurseSchema.shift_id);

      
    await queryInterface.addConstraint(NURSE_TABLE,{
      fields: ['area_id'],
      type: 'foreign key',
      references:{
        table: NURSE_AREA_TABLE,
        field: 'id'
      },
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint(NURSE_TABLE,{
      fields: ['charge_id'],
      type: 'foreign key',
      references:{
        table: NURSE_CHARGE_TABLE,
        field: 'id'
      },
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint(NURSE_TABLE,{
      fields: ['shift_id'],
      type: 'foreign key',
      references:{
        table: NURSE_SHIFT_TABLE,
        field: 'id'
      },
      onDelete: 'SET NULL'
    });


  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn(NURSE_TABLE,'area_id');
    await queryInterface.removeColumn(NURSE_TABLE,'charge_id');
    await queryInterface.removeColumn(NURSE_TABLE,'shift_id');

  }
};
