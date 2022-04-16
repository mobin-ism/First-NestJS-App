import { EntityRepository, Repository } from 'typeorm';
import { Item } from '../entities/items.entity';

@EntityRepository(Item)
export class ItemsRepository extends Repository<Item> {}
