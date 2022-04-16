import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsEntity } from './items.entity';
import { ItemService } from './items.service';
import { ItemsRepository } from './repository/items.repository';
@Module({
  imports: [TypeOrmModule.forFeature([ItemsRepository])],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
