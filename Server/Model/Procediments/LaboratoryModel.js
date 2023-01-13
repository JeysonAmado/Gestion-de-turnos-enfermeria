const {Model,DataTypes,Sequelize} = require('sequelize');


const LABORATORY_TABLE='laboratories';

const LaboratorySchema = {
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
    laboratory_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    laboratory_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class Laboratory extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: LABORATORY_TABLE,
            modelName: 'Laboratories',    
            timestamps: false
        }
    }

}

module.exports = {LABORATORY_TABLE, LaboratorySchema, Laboratory}