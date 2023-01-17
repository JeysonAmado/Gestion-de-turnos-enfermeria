'use strict';

const { ProbeTypeSchema, PROBE_TYPE_TABLE } = require('../../Model/Procediments/ProcedimentsTypes/ProbesTypeModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(PROBE_TYPE_TABLE, 'type', ProbeTypeSchema.type);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(PROBE_TYPE_TABLE,'type');

  }
};
