const {Model,DataTypes,Sequelize} = require('sequelize');
const { PACIENT_TABLE } = require('./PacientModel');
const { SEVERITY_LEVEL_TABLE } = require('./SeverityLevelModel');

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
        type: DataTypes.INTEGER,
        references: {
            model: SEVERITY_LEVEL_TABLE,
            key: 'id'
        }        
    }
}

class Bed extends Model {

    static associate(models){
        this.hasMany(models.Pacients, {as : PACIENT_TABLE });
        this.belongsTo(models.SeverityLevels, {as: SEVERITY_LEVEL_TABLE});        
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