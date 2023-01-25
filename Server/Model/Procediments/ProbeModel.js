const {Model,DataTypes,Sequelize} = require('sequelize');


const PROBE_TABLE='probes';

const ProbeSchema = {
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
    probe_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    probe_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class Probe extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROBE_TABLE,
            modelName: 'Probes',    
            timestamps: false
        }
    }

}

module.exports = {PROBE_TABLE, ProbeSchema, Probe}