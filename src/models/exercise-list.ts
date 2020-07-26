import sequelize from '../config/database';
import { DataTypes } from 'sequelize';
import User from './user';

const ExerciseList = sequelize.define(
  'exercise_list',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  { freezeTableName: true }
);

ExerciseList.belongsTo(User, { foreignKey: 'userId' });

export default ExerciseList;
