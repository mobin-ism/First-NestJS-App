import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ItemsModule } from './items/items.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BrandsModule, ItemsModule],
})
export class AppModule {}
