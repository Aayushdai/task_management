import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.TASK_DB_NAME,
  process.env.TASK_DB_USER,
    process.env.TASK_DB_PASSWORD,
    {
        host: process.env.TASK_DB_HOST,
        port: Number(process.env.TASK_DB_PORT) || 3306,        dialect: 'mysql'
    }
);

export default sequelize;