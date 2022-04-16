import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsRepository } from './repository/items.repository';
import { ItemDTO } from './dto/items.create.dto';
import { Item } from './entities/items.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemsRepository) private itemsRepository: ItemsRepository,
  ) {}

  /**
   * GETTING ALL
   *
   * @return  {<Promise><ItemsEntity>[]}
   */
  getALL(): Promise<Item[]> {
    return this.itemsRepository.find({
      relations : ['item_brand_id']
    });
  }

  /**
   * GETTING ONE BY ID
   *
   * @param   {number<ItemsEntity>} id
   *
   * @return  {Promise<Item>}
   */
  getOneById(id: number): Promise<Item> {
    try {
      return this.itemsRepository.findOneOrFail(id);
    } catch (error) {
      throw error;
    }
  }

  /**
   * CREATING AN ITEM
   *
   * @param   {ItemDTO}  items
   *
   * @return  {<items>}
   */
  create(createItemData : ItemDTO) : Promise<Item>{
    return this.itemsRepository.save(createItemData);
  }

  /**
   * UPDATING AN ITEM
   *
   * @param   {undefined<any>}  newItem
   *
   * @return  {Promise<any>}
   */
  updateItem(newItem): Promise<any> {
    if (this.getOneById(newItem.item_id)) {
      this.itemsRepository.update(newItem.item_id, newItem);
      return this.getOneById(newItem.item_id);
    }
  }

  /**
   * DELETING AN ITEM
   *
   * @param   {undefined<ItemsEntity>}  id
   *
   * @return  {Promise<Item>}
   */
  deleteItem(id): Promise<Item> {
    const prevItem = this.getOneById(id);
    if (prevItem) {
      this.itemsRepository.softDelete(id);
    }

    return prevItem;
  }
}
