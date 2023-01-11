const {Model,DataTypes,Sequelize} = require('sequelize');
const { BEDS_TABLE } = require('./BedsModel');

const PACIENT_TABLE='pacients';

const PacientSchema = {
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
    document_number: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    eps: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    bed_assigned_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: BEDS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'    
    },
    pacient_weight: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    pacient_height: {
        allowNull: false,
        type: DataTypes.INTEGER        
    },
    diagnostic: {
        allowNull: false,
        type: DataTypes.STRING        
    },
    admission_date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW        
    },
    departure_date: {
        allowNull: true,
        type: DataTypes.DATE        
    },
    
}

class Pacient extends Model {

    static associate(models){
        this.belongsTo(models.Beds, {as : BEDS_TABLE })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PACIENT_TABLE,
            modelName: 'Pacients',    
            timestamps: false
        }
    }

}

module.exports = {PACIENT_TABLE, PacientSchema, Pacient}