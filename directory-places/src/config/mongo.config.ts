import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongoConfig = {
  uri: process.env.MONGO_URI || 'mongodb://isa:12345@mongodb:27017/open_directory?authSource=admin',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongooseModuleOptions,
};
