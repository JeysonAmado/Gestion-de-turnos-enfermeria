const {Model,DataTypes,Sequelize} = require('sequelize');
const { NURSE_TABLE } = require('./NurseModel');

const NURSE_AREA_TABLE='nurse_areas';

const NurseAreaSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    area_name: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT        
    }
}

class NurseArea extends Model {

    static associate(models){
        this.hasMany(models.Nurses, {as : NURSE_TABLE })        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: NURSE_AREA_TABLE,
            modelName: 'NurseAreas',    
            timestamps: false
        }
    }

}

module.exports = {NURSE_AREA_TABLE, NurseAreaSchema, NurseArea}