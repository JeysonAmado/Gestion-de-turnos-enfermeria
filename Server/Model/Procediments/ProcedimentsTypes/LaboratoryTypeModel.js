const {Model,DataTypes,Sequelize} = require('sequelize');


const LABORATORY_TYPE_TABLE='laboratories_types';

const LaboratoryTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    laboratory_type_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
}

class LaboratoryType extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: LABORATORY_TYPE_TABLE,
            modelName: 'LaboratoryTypes',    
            timestamps: false
        }
    }

}

module.exports = {LABORATORY_TYPE_TABLE, LaboratoryTypeSchema, LaboratoryType}