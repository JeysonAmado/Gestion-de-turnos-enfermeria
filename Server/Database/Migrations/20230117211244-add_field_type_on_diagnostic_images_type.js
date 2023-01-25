'use strict';

const { DIAGNOSTIC_IMAGES_TYPE_TABLE, DiagnosticImagesTypeSchema } = require('../../Model/Procediments/ProcedimentsTypes/DiagnosticImagesTypesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn(DIAGNOSTIC_IMAGES_TYPE_TABLE, 'type', DiagnosticImagesTypeSchema.type);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(DIAGNOSTIC_IMAGES_TYPE_TABLE,'type');

  }
};
