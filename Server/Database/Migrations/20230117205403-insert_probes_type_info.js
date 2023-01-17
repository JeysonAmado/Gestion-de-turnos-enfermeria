'use strict';

const { PROBE_TYPE_TABLE } = require('../../Model/Procediments/ProcedimentsTypes/ProbesTypeModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    const data = [
      { probe_type_name: 'Permanente', type: 'Vesical'},
      { probe_type_name: 'Cateterismo vesical', type: 'Vesical'},
      { probe_type_name: 'Suprapúbico', type: 'Vesical'},
      { probe_type_name: 'Nasogastrica', type: 'Gástrica'},
      { probe_type_name: 'Orogástrica', type: 'Gástrica'},
      { probe_type_name: 'Duodenal', type: 'Gástrica'},
      { probe_type_name: 'Yeyunal', type: 'Gástrica'},
      { probe_type_name: 'Gastrostomia', type: 'Gástrica'},
      { probe_type_name: 'Yeyunostomia', type: 'Gástrica'},
    ];

    await queryInterface.bulkInsert(PROBE_TYPE_TABLE,data);

  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete(PROBE_TYPE_TABLE, null, {});
  }
};
