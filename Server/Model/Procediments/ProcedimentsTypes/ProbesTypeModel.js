const {Model,DataTypes,Sequelize} = require('sequelize');


const PROBE_TYPE_TABLE='probes_types';

const ProbeTypeSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    probe_type_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
}

class ProbeType extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROBE_TYPE_TABLE,
            modelName: 'ProbeTypes',    
            timestamps: false
        }
    }

}

module.exports = {PROBE_TYPE_TABLE, ProbeTypeSchema, ProbeType}