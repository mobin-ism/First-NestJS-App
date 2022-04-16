import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from '../items/entities/items.entity';
import { Brand } from '../brands/entities/brand.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  entities: [Item, Brand],
  synchronize: true,
};
