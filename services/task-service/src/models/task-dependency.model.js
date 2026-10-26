import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const TaskDependency = sequelize.define('TaskDependency', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dependsOnTaskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'task_dependencies',
    updatedAt: false, // Disable updatedAt field
});

export default TaskDependency;