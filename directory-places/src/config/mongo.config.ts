import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongoConfig = {
  uri: process.env.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongooseModuleOptions,
};
