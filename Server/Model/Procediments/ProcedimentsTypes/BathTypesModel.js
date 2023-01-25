const {Model,DataTypes,Sequelize} = require('sequelize');


const BATH_TYPE_TABLE='baths_types';

const BathTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    bath_type_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
}

class BathType extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: BATH_TYPE_TABLE,
            modelName: 'BathTypes',    
            timestamps: false
        }
    }

}

module.exports = {BATH_TYPE_TABLE, BathTypeSchema, BathType}