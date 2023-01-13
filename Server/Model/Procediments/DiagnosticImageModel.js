const {Model,DataTypes,Sequelize} = require('sequelize');


const DIAGNOSTIC_IMAGES_TABLE='diagnostic_images';

const DiagnosticImagesSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    shifts_check_up_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    diagnostic_image_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    diagnostic_image_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class DiagnosticImage extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: DIAGNOSTIC_IMAGES_TABLE,
            modelName: 'DiagnosticImages',    
            timestamps: false
        }
    }

}

module.exports = {DIAGNOSTIC_IMAGES_TABLE, DiagnosticImagesSchema, DiagnosticImage}