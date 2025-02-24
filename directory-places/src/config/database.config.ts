import { SequelizeModuleOptions } from '@nestjs/sequelize';
import 'dotenv/config';

export const mysqlConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  autoLoadModels: true,
  synchronize: true,
};
