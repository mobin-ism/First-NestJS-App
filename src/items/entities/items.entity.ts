import { Brand } from 'src/brands/entities/brand.entity';
import {
  BaseEntity,
  Column,
  Double,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'This is the primary key of items table',
  })
  item_id: number;

  @Column({
    type: 'varchar',
  })
  item_name: string;

  @Column({
    type: 'varchar',
  })
  item_description: string;

  @Column({
    type: 'int',
  })
  item_quantity: number;


  @ManyToOne(type => Brand, brand => brand.brand_id)
  item_brand_id : Brand
}
