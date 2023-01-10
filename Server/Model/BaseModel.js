const {Bed, BedSchema } = require('./BedsModel');

function setupModels(sequelize){
    Bed.init(BedSchema, Bed.config(sequelize));
}


module.exports = setupModels;