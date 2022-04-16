import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandReposity } from './repository/brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BrandReposity])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
