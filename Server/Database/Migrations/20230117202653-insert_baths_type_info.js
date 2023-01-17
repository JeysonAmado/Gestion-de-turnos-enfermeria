'use strict';

const { BATH_TYPE_TABLE } = require('../../Model/Procediments/ProcedimentsTypes/BathTypesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      { bath_type_name: 'Autónomo'},
      { bath_type_name: 'Asistido en ducha'},
      { bath_type_name: 'Baño en cama'},
    ];

    await queryInterface.bulkInsert(BATH_TYPE_TABLE,data);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete(BATH_TYPE_TABLE, null, {});
  }
};
