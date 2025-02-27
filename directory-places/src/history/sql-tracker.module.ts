import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SqlTrackerService } from './sql-tracker.service';
import { History, HistorySchema } from './history.schema';
import { SqlTrackerController } from './sql-tracker.controller';

@Global() // Hacemos el módulo global para no tener que importarlo en cada módulo
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: History.name, schema: HistorySchema },
    ]),
  ],
  controllers: [SqlTrackerController],
  providers: [SqlTrackerService],
  exports: [SqlTrackerService], // Exportamos el servicio para que pueda ser usado en otros módulos
})
export class SqlTrackerModule {}