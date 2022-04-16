import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  brand_id: number;

  @Column()
  brand_name: string;

  @Column('boolean', {default: true})
  brand_is_popular: boolean = true;
}
