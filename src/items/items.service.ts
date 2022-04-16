import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsRepository } from './repository/items.repository';
import { ItemCreateDTO } from './dto/items.create.dto';
import { ItemsEntity } from './items.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemsRepository) private itemsRepository: ItemsRepository,
  ) {}
  getAll(): string {
    return 'Hello World!';
  }

  async create(items: ItemCreateDTO) {
    return await this.itemsRepository.save(items);
  }

  // GETTING ALL
  getALL() : Promise<ItemsEntity[]> {
    return this.itemsRepository.find();
  }

  // GETTING ONE BY ID
  getOneById(id : number) : Promise<ItemsEntity> {
    try {
      return this.itemsRepository.findOneOrFail(id);
    } catch (error) {
      throw error;
    }
  }

  // updating an item
  updateItem(newItem) : Promise<any> {
  
  if(this.getOneById(newItem.item_id)){
    this.itemsRepository.update(newItem.item_id, newItem);
    return this.getOneById(newItem.item_id);
  }
  }

  // DELETING AN ITEM
  deleteItem(id) : Promise<ItemsEntity> {
    const prevItem = this.getOneById(id);
    if(prevItem){
      this.itemsRepository.softDelete(id);
    }

    return prevItem;
  }
}
