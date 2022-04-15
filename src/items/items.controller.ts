import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import {ItemCreateDTO} from './dto/items.create.dto';
import { ItemsInterface } from './items.interface';

@Controller('items')
export class ItemsController implements ItemsInterface {
    @Get()
    getAll() {
        return "This is the items controller";
    }

    @Post()
    create(@Body() createItemDTO : ItemCreateDTO) : string {
        return "Create Item name : "+createItemDTO.name;
    }

    @Put()
    Edit(@Body() editItemDTO : ItemCreateDTO) : string {
        return "Edit Item name : "+editItemDTO.name;
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
