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
    in_use: {
        allowNull: false,
        type: DataTypes.BOOLEAN        
    },
    severity_level_id: {
        allowNull: false,
        type: DataTypes.INTEGER 
    },
    
}

class Bed extends Model {

    static associate(models){
                
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