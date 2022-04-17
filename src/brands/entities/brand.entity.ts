import { Item } from 'src/items/entities/items.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  brand_id: number;

  @Column()
  brand_name: string;

  @Column('boolean', { default: true })
  brand_is_popular: boolean = true;

  @OneToMany((type) => Item, (item) => item.item_brand_id)
  items: Item[];
}
