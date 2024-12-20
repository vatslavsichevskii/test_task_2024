import { Sequelize } from 'sequelize-typescript';
import { User } from '../src/users/user.model';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    models: [User],
    logging: false,
});