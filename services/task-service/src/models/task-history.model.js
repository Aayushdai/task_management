import { DataTypes} from 'sequelize';
import sequelize from '../database.js';

const TaskHistory = sequelize.define('TaskHistory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    actorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    action: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fieldName: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    oldValue: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    newValue: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
    tableName: 'task_history',
    updatedAt: false, // Disable updatedAt field
});

export default TaskHistory;