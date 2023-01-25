const {Model,DataTypes,Sequelize} = require('sequelize');


const SIGNALS_TABLE='signals';

const SignalsSchema = {
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
    temperature:{
        allowNull: true,
        type: DataTypes.STRING 
    },
    heart_rate:{
        allowNull: true,
        type: DataTypes.STRING 
    },
    breath_rate:{
        allowNull: true,
        type: DataTypes.STRING 
    },
    arterial_tension:{
        allowNull: true,
        type: DataTypes.STRING 
    },
    oxygen_saturation:{
        allowNull: true,
        type: DataTypes.STRING 
    },
    signals_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class Signals extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: SIGNALS_TABLE,
            modelName: 'Signals',    
            timestamps: false
        }
    }

}

module.exports = {SIGNALS_TABLE, SignalsSchema, Signals}