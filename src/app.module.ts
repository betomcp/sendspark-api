import { Module } from '@nestjs/common';
import { DbConfigModule } from './core/db-config.module';
@Module({
  imports: [DbConfigModule],
})
export class AppModule {}
