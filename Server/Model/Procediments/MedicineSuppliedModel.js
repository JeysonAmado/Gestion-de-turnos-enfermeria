const {Model,DataTypes,Sequelize} = require('sequelize');


const MEDICINE_SUPPLIED_TABLE='medicines_supplied';

const MedicineSuppliedSchema = {
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
    medicine_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    medicine_presentation: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    supplied_quantity: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    medicine_supplied_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class MedicineSupplied extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: MEDICINE_SUPPLIED_TABLE,
            modelName: 'MedicinesSupplied',    
            timestamps: false
        }
    }

}

module.exports = {MEDICINE_SUPPLIED_TABLE, MedicineSuppliedSchema, MedicineSupplied}