import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ItemsEntity } from '../items/items.entity';

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    entities: [ItemsEntity],
    synchronize: true,
};