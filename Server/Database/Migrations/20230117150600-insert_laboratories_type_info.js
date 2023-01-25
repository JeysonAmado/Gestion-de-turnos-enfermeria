'use strict';

const { LABORATORY_TYPE_TABLE } = require('../../Model/Procediments/ProcedimentsTypes/LaboratoryTypeModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //  const data = [
  //    { column1: 'value1', column2: 'value2'},
  //    { column1: 'value3', column2: 'value4'},
  //  ];

    const data = [
      { laboratory_type_name: 'Glicemia', type: 'Sangre'},
      { laboratory_type_name: 'Colesterol', type: 'Sangre'},
      { laboratory_type_name: 'Creatinina', type: 'Sangre'},
      { laboratory_type_name: 'Perfil lipídico', type: 'Sangre'},
      { laboratory_type_name: 'Ácido úrico', type: 'Sangre'},
      { laboratory_type_name: 'Proteinas totales', type: 'Sangre'},
      { laboratory_type_name: 'Albumina', type: 'Sangre'},
      { laboratory_type_name: 'Crioglutininas', type: 'Sangre'},
      { laboratory_type_name: 'Crioglobulinas', type: 'Sangre'},
      { laboratory_type_name: 'Prolactina', type: 'Sangre'},
      { laboratory_type_name: 'Hierro sérico', type: 'Sangre'},
      { laboratory_type_name: 'Ferritima', type: 'Sangre'},
      { laboratory_type_name: 'Alfafetoproteinas', type: 'Sangre'},
      { laboratory_type_name: 'Antígenos febriles', type: 'Sangre'},
      { laboratory_type_name: 'Coombs indirecto', type: 'Sangre'},
      { laboratory_type_name: 'Progesterona', type: 'Sangre'},
      { laboratory_type_name: 'LDH', type: 'Sangre'},
      { laboratory_type_name: 'TGO', type: 'Sangre'},
      { laboratory_type_name: 'TGP', type: 'Sangre'},
      { laboratory_type_name: 'CK', type: 'Sangre'},
      { laboratory_type_name: 'CK MB', type: 'Sangre'},
      { laboratory_type_name: 'FSH', type: 'Sangre'},
      { laboratory_type_name: 'RA', type: 'Sangre'},
      { laboratory_type_name: 'PCR', type: 'Sangre'},
      { laboratory_type_name: 'ASTOS', type: 'Sangre'},
      { laboratory_type_name: 'HIV', type: 'Sangre'},
      { laboratory_type_name: 'HBsag', type: 'Sangre'},
      { laboratory_type_name: 'VHC', type: 'Sangre'},
      { laboratory_type_name: 'VHC', type: 'Sangre'},
      { laboratory_type_name: 'VDLR', type: 'Sangre'},
      { laboratory_type_name: 'HCG', type: 'Sangre'},
      { laboratory_type_name: 'BHCG', type: 'Sangre'},
      { laboratory_type_name: 'TSH', type: 'Sangre'},
      { laboratory_type_name: 'T4', type: 'Sangre'},
      { laboratory_type_name: 'T4L', type: 'Sangre'},
      { laboratory_type_name: 'PSA', type: 'Sangre'},
      { laboratory_type_name: 'TOXO G', type: 'Sangre'},
      { laboratory_type_name: 'TOXO M', type: 'Sangre'},
      { laboratory_type_name: 'FTA-ABS', type: 'Sangre'},
      { laboratory_type_name: 'ANAS', type: 'Sangre'},
      { laboratory_type_name: 'LH', type: 'Sangre'},
      { laboratory_type_name: 'ETC', type: 'Sangre'},
      { laboratory_type_name: 'Ca 125', type: 'Sangre'},
      { laboratory_type_name: 'Na', type: 'Sangre'},
      { laboratory_type_name: 'K', type: 'Sangre'},
      { laboratory_type_name: 'Tiempo de protombina (PT)', type: 'Sangre'},
      { laboratory_type_name: 'Tiempo de Tromboplastina parcial activado (PTT)', type: 'Sangre'},
      { laboratory_type_name: 'Tiempo de coagulación ', type: 'Sangre'},
      { laboratory_type_name: 'Fibrinógeno', type: 'Sangre'},
      { laboratory_type_name: 'INR', type: 'Sangre'},
      { laboratory_type_name: 'DIMERO D', type: 'Sangre'},
      { laboratory_type_name: 'Hemograma', type: 'Sangre'},
      { laboratory_type_name: 'CH', type: 'Sangre'},
      { laboratory_type_name: 'Hb', type: 'Sangre'},
      { laboratory_type_name: 'Hto', type: 'Sangre'},
      { laboratory_type_name: 'Recuento de glóbulos rojos', type: 'Sangre'},
      { laboratory_type_name: 'Recuento total de glóbulos blancos', type: 'Sangre'},
      { laboratory_type_name: 'Indices Eritrocitarios', type: 'Sangre'},
      { laboratory_type_name: 'Recuento diferenciado de leucocitos', type: 'Sangre'},
      { laboratory_type_name: 'Medición y morfología globular', type: 'Sangre'},
      { laboratory_type_name: 'Recuento de plaquetas en Frotis de sangre periferica', type: 'Sangre'},
      { laboratory_type_name: 'Recuento de reticulocitos en coloración supravital', type: 'Sangre'},
      { laboratory_type_name: 'Recuento de eosinofilos en coloración supravital', type: 'Sangre'},
      { laboratory_type_name: 'Hemoparasitos', type: 'Sangre'},
      { laboratory_type_name: 'Enzimas cardiacas', type: 'Sangre'},
      { laboratory_type_name: 'Parcial de orina', type: 'Orina'},
      { laboratory_type_name: 'Urocultivo', type: 'Orina'},
      { laboratory_type_name: 'Orina 24 horas', type: 'Orina'},
      { laboratory_type_name: 'Parcial de orina para bebés', type: 'Orina'},
      { laboratory_type_name: 'Examen coprológico', type: 'Coprológico'},
    ];

    
    await queryInterface.bulkInsert(LABORATORY_TYPE_TABLE, data);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete(LABORATORY_TYPE_TABLE, null, {});
  }
};
