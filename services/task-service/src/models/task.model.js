import { DataTypes} from 'sequelize';
import sequelize from '../database.js';

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assignedTo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('todo','in_review', 'in_progress', 'completed'),    
        defaultValue: 'todo',
        allowNull: false,
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high','urgent'),
        defaultValue: 'medium',
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: true,
    tableName: 'tasks',
});

export default Task;