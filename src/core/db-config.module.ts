import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// dotenv import and config
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL)],
})
export class DbConfigModule {}
