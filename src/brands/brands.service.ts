import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { BrandReposity } from './repository/brand.repository';

@Injectable()
export class BrandsService {

  constructor(@InjectRepository(BrandReposity) private brandReposity : BrandReposity) {}

  create(createBrandDto: CreateBrandDto) : Promise<Brand> {
    return this.brandReposity.save(createBrandDto);
  }

  findAll() : Promise<Brand[]> {
    return this.brandReposity.find();
  }

  findOne(id: number) : Promise<Brand>{
    try {
      return this.brandReposity.findOneOrFail(id);
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateBrandDto: UpdateBrandDto) : Promise<Brand> {
    const prevData = this.findOne(id);
    if(prevData){
      this.brandReposity.update(id, updateBrandDto);
    }

    return prevData;
  }

  remove(id: number) : Promise<Brand> {
    const prevData = this.findOne(id);
    if(prevData){
      this.brandReposity.delete(id);
    }

    return prevData;
  }
}
