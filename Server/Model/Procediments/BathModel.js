const {Model,DataTypes,Sequelize} = require('sequelize');


const BATH_TABLE='baths';

const BathSchema = {
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
    bath_type_id: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    person_who_did_it: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    bath_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    },
    aditional_notes:{
        allowNull: true,
        type: DataTypes.TEXT 
    }
}

class Bath extends Model {

    static associate(models){
                
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: BATH_TABLE,
            modelName: 'Baths',    
            timestamps: false
        }
    }

}

module.exports = {BATH_TABLE, BathSchema, Bath}