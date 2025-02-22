import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config'; // ← Asegura que las variables .env se carguen

export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  autoLoadEntities: true, // Carga automáticamente las entidades
};
