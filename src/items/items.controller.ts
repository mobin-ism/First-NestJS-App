import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import {ItemCreateDTO} from './dto/items.create.dto';
import { ItemsInterface } from './items.interface';
import { ItemService } from './items.service';

@Controller('items')
export class ItemsController implements ItemsInterface {

    constructor( private itemService : ItemService) {}

    @Get()
    getAll() {
        return "This is the items controller";
    }

    @Post()
    async create(@Body() createItemData : ItemCreateDTO) {
        return await this.itemService.create(createItemData);
    }

    @Put()
    Edit(@Body() editItemDTO : ItemCreateDTO) : string {
        return "Edit Item name : ";
    }

    @Get('/:id/:name')
    findOne(@Param() param) : string {
        return `Id is ${param.id} Name is ${param.name}`;
    }

    displayItems(): string {
        return "displaying";
    }

    sellItems(): string {
        return "selling";
    }
}
