import { Repository } from "typeorm";
import { ItemsEntity } from "../items.entity";

export class ItemsRepository extends Repository<ItemsEntity> {}