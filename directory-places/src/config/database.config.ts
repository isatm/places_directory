import { SequelizeModuleOptions } from '@nestjs/sequelize';
import 'dotenv/config';
import { Place } from '../places/places.entity';
import { Tag } from '../tags/tags.entity';
import { PlaceTag } from '../place-tags/place-tags.entity';
import { Category } from '../categories/categories.entity';

export const mysqlConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "places_db",
  autoLoadModels: true,
  synchronize: true,
  models: [Place, Tag, PlaceTag, Category],
};
