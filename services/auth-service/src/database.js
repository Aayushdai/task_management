import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.AUTH_DB_NAME,
    process.env.AUTH_DB_USER,
    process.env.AUTH_DB_PASSWORD,
    {
        host: process.env.AUTH_DB_HOST,
        port: process.env.AUTH_DB_PORT,
        dialect: 'mysql',
        logging: false, // Disable logging for cleaner output
    }
);

export default sequelize;