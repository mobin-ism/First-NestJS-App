import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsRepository } from './repository/items.repository';
import { ItemCreateDTO } from './dto/items.create.dto';

@Injectable()
export class ItemService {
  
  constructor(@InjectRepository(ItemsRepository) private itemsRepository : ItemsRepository){

  }
  getAll(): string {
    return 'Hello World!';
  }

  async create(items : ItemCreateDTO) {
   return await this.itemsRepository.save(items);
  }
}
