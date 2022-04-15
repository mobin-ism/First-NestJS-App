import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsEntity } from './items.entity';
import { ItemService } from './items.service';

@Module({
  imports: [
  TypeOrmModule.forFeature([ItemsEntity]),
  ], 
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
