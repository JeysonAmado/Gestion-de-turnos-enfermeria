'use strict';

const { LABORATORY_TYPE_TABLE, LaboratoryTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/LaboratoryTypeModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(LABORATORY_TYPE_TABLE, 'type', LaboratoryTypeSchema.type);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(LABORATORY_TYPE_TABLE,'type');

  }
};
