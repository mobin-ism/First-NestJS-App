import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemDTO } from './dto/items.create.dto';
import { ItemsInterface } from './items.interface';
import { ItemService } from './items.service';
import { Item } from './entities/items.entity';

@Controller('items')
export class ItemsController implements ItemsInterface {
  constructor(private itemService: ItemService) {}

  /**
   * GETTING ALL THE ITEMS
   */
  @Get()
  getAll(): Promise<Item[]> {
    return this.itemService.getALL();
  }

  /**
   * GETTING A SINGLE ITEM
   */
  @Get('/:id')
  getOneById(@Param() param): Promise<Item> {
    return this.itemService.getOneById(param.id);
  }

  /**
   * CREATING A SINGLE ITEM
   */
  @Post()
  create(@Body() createItemData: ItemDTO) : Promise<Item> {
    return this.itemService.create(createItemData);
  }

  /**
   * EDITING A SINGLE ITEM
   */
  @Put()
  Edit(@Body() updateItemData: ItemDTO): Promise<Item> {
    return this.itemService.updateItem(updateItemData);
  }

  /**
   * UPDATING AN ITEM
   */
  @Get('/:id/:name')
  findOne(@Param() param): string {
    return `Id is ${param.id} Name is ${param.name}`;
  }

  /**
   * DELETING AN ITEM
   */
  @Delete('/:id')
  delete(@Param() param): Promise<Item> {
    return this.itemService.deleteItem(param.id);
  }

  /**
   * IMPLEMENTING INTERFACE METHOD AS TESTING
   */
  displayItems(): string {
    return 'displaying';
  }

  sellItems(): string {
    return 'selling';
  }
}
