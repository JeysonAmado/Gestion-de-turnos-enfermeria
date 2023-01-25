'use strict';

const { DIAGNOSTIC_IMAGES_TYPE_TABLE } = require('../../Model/Procediments/ProcedimentsTypes/DiagnosticImagesTypesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      { diagnostic_images_type_name: 'Rayos X', type: 'Imagen diagnóstica'},
      { diagnostic_images_type_name: 'TAC', type: 'Imagen diagnóstica'},
      { diagnostic_images_type_name: 'Ecografía', type: 'Imagen diagnóstica'},
      { diagnostic_images_type_name: 'Colonosopia', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Colon por enema', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Intubación Traqueal', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Drenaje Torácico', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Endoscopia', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Broncoscopia por enema', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Citoscopia', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Biopsia renal', type: 'Procedimiento diagnóstico invasivo'},
      { diagnostic_images_type_name: 'Punción lumbar', type: 'Procedimiento diagnóstico invasivo'},
    ];

    await queryInterface.bulkInsert(DIAGNOSTIC_IMAGES_TYPE_TABLE,data)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete(DIAGNOSTIC_IMAGES_TYPE_TABLE, null, {});
  }
};
