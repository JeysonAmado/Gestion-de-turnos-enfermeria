const {Model,DataTypes,Sequelize} = require('sequelize');


const SHIFT_CHECK_UP_TABLE='shifts_check_up';

const ShiftCheckUpSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    pacient_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    nurse_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    unit_grooming: {
        allowNull: false,
        type: DataTypes.BOOLEAN 
    },
    check_up_start:{
        allowNull: false,
        type: DataTypes.DATE 
    },
    check_up_end:{
        allowNull: false,
        type: DataTypes.DATE 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    },

    
}

class ShiftCheckUp extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: SHIFT_CHECK_UP_TABLE,
            modelName: 'ShiftsCheckUp',    
            timestamps: false
        }
    }

}

module.exports = {SHIFT_CHECK_UP_TABLE, ShiftCheckUpSchema, ShiftCheckUp}