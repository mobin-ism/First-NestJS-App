import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { ItemCreateDTO } from './dto/items.create.dto';
import { ItemsInterface } from './items.interface';
import { ItemService } from './items.service';
import { ItemsEntity } from './items.entity';

@Controller('items')
export class ItemsController implements ItemsInterface {
  constructor(private itemService: ItemService) {}

  @Get()
  getAll() : Promise<ItemsEntity[]> {
    return this.itemService.getALL();
  }

  @Get('/:id')
  getOneById(@Param() param) : Promise<ItemsEntity> {
    return this.itemService.getOneById(param.id);
  }

  @Post()
  async create(@Body() createItemData: ItemCreateDTO) {
    return await this.itemService.create(createItemData);
  }

  @Put()
  Edit(@Body() updateItemData: ItemCreateDTO) : Promise<ItemsEntity> {
    return this.itemService.updateItem(updateItemData);
  }

  @Get('/:id/:name')
  findOne(@Param() param): string {
    return `Id is ${param.id} Name is ${param.name}`;
  }

  @Delete('/:id')
  delete(@Param() param) : Promise<ItemsEntity> {
    return this.itemService.deleteItem(param.id);
  }

  displayItems(): string {
    return 'displaying';
  }

  sellItems(): string {
    return 'selling';
  }
}
