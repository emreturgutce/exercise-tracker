import sequelize from '../config/database';
import { DataTypes } from 'sequelize';
import ExerciseList from './exercise-list';

const Exercise = sequelize.define(
  'exercise',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    exerciseListId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

Exercise.belongsTo(ExerciseList, { foreignKey: 'exerciseListId' });

export default Exercise;
