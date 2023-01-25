const {Model,DataTypes,Sequelize} = require('sequelize');


const SEVERITY_LEVEL_TABLE='severity_levels';

const SeverityLevelSchema = {
    id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER        
    },
    severity_level_name: {
        allowNull: false,
        type: DataTypes.STRING,        
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT        
    },
}


class SeverityLevel extends Model {

    static associate(models){
        this.hasMany(models.Beds, {
            as: 'severity',
            foreignKey: 'severity_level_id'
          });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: SEVERITY_LEVEL_TABLE,
            modelName: 'SeverityLevels',    
            timestamps: false
        }
    }

}

module.exports = {SEVERITY_LEVEL_TABLE, SeverityLevelSchema, SeverityLevel}