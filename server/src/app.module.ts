import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CsvController } from './csv/csv.controller';

@Module({
  imports: [],
  controllers: [CsvController],
  providers: [AppService],
})
export class AppModule {}
