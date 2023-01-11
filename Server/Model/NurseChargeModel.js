const {Model,DataTypes,Sequelize} = require('sequelize');
const { NURSE_TABLE } = require('./NurseModel');

const NURSE_CHARGE_TABLE='nurse_charges';

const NurseChargeSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    name_charge: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT        
    }
}

class NurseCharge extends Model {

    static associate(models){
        this.hasMany(models.Nurses, {as : NURSE_TABLE })        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: NURSE_CHARGE_TABLE,
            modelName: 'NurseCharges',    
            timestamps: false
        }
    }

}

module.exports = {NURSE_CHARGE_TABLE, NurseChargeSchema, NurseCharge}