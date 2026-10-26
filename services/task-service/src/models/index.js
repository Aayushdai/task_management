import Task from "./task.model.js";
import Comment from "./comment.model.js";
import TaskHistory from "./task-history.model.js";
import TaskDependency from "./task-dependency.model.js";

// Task and Comment
Task.hasMany(Comment, {
    foreignKey: "taskId",
    as: "comments"
});

Comment.belongsTo(Task, {
    foreignKey: "taskId",
    as: "task"
});

// Task and TaskHistory
Task.hasMany(TaskHistory, {
    foreignKey: "taskId",
    as: "history"
});

TaskHistory.belongsTo(Task, {
    foreignKey: "taskId",
    as: "task"
});

// Task and its dependencies
Task.hasMany(TaskDependency, {
    foreignKey: "taskId",
    as: "dependencies"
});

TaskDependency.belongsTo(Task, {
    foreignKey: "taskId",
    as: "task"
});

// Task and its prerequisite tasks
Task.hasMany(TaskDependency, {
    foreignKey: "dependsOnTaskId",
    as: "dependents"
});

TaskDependency.belongsTo(Task, {
    foreignKey: "dependsOnTaskId",
    as: "prerequisite"
});

export {
    Task,
    Comment,
    TaskHistory,
    TaskDependency
};