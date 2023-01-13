const {Model,DataTypes,Sequelize} = require('sequelize');
const { NURSE_TABLE } = require('./NurseModel');

const NURSE_SHIFT_TABLE='nurse_shifts';

const NurseShiftSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    shift_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT        
    }
}

class NurseShift extends Model {

    static associate(models){
        this.hasMany(models.Nurses, {as : NURSE_TABLE })        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: NURSE_SHIFT_TABLE,
            modelName: 'NurseShifts',    
            timestamps: false
        }
    }

}

module.exports = {NURSE_SHIFT_TABLE, NurseShiftSchema, NurseShift}