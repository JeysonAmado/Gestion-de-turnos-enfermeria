const {Model,DataTypes,Sequelize} = require('sequelize');


const DIAGNOSTIC_IMAGES_TYPE_TABLE='diagnostic_images_types';

const DiagnosticImagesTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    diagnostic_images_type_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
}

class DiagnosticImageType extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: DIAGNOSTIC_IMAGES_TYPE_TABLE,
            modelName: 'DiagnosticImagesTypes',    
            timestamps: false
        }
    }

}

module.exports = {DIAGNOSTIC_IMAGES_TYPE_TABLE, DiagnosticImagesTypeSchema, DiagnosticImageType}