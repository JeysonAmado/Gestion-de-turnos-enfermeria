const {Model,DataTypes,Sequelize} = require('sequelize');

const BEDS_TABLE='beds';

const BedSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    number_bed: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    severity_level: {
        allowNull: false,
        type: DataTypes.STRING        
    }
}

class Bed extends Model {

    static associations(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: BEDS_TABLE,
            modelName: 'Beds',    
            timestamps: false
        }
    }

}

module.exports = {BEDS_TABLE, BedSchema, Bed}