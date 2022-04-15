import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ItemsModule } from './items/items.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ItemsModule,
    ShopsModule
  ]
})
export class AppModule {}
