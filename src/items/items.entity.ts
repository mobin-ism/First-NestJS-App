import {
  BaseEntity,
  Column,
  Double,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('items')
export class ItemsEntity extends BaseEntity {
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
}
