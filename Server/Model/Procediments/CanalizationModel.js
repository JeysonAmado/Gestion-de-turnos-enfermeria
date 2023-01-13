const {Model,DataTypes,Sequelize} = require('sequelize');


const CANALIZATION_TABLE='canalizations';

const CanalizationSchema = {
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
    body_part: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    canalization_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class Canalization extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: CANALIZATION_TABLE,
            modelName: 'Canalizations',    
            timestamps: false
        }
    }

}

module.exports = {CANALIZATION_TABLE, CanalizationSchema, Canalization}