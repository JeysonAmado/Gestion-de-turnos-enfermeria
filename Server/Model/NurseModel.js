const {Model,DataTypes,Sequelize} = require('sequelize');
const { NURSE_AREA_TABLE } = require('./NurseArea');
const { NURSE_CHARGE_TABLE } = require('./NurseChargeModel');
const { NURSE_SHIFT_TABLE } = require('./NurseShift');

const NURSE_TABLE='nurses';

const NurseSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    birthday: {
        allowNull: false,
        type: DataTypes.DATEONLY        
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    charge_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    shift_id: {
        allowNull: false,
        type: DataTypes.INTEGER ,
    },
    area_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    user: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
}

class Nurse extends Model {

    static associate(models){
        this.belongsTo(models.NurseCharges, { as : NURSE_CHARGE_TABLE });
        this.belongsTo(models.NurseShifts, {as : NURSE_SHIFT_TABLE });
        this.belongsTo(models.NurseAreas,{ as : NURSE_AREA_TABLE });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: NURSE_TABLE,
            modelName: 'Nurses',    
            timestamps: false
        }
    }

}

module.exports = {NURSE_TABLE, NurseSchema, Nurse}