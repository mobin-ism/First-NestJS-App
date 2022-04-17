import { Brand } from 'src/brands/entities/brand.entity';
export class ItemDTO {
  readonly item_name: string;
  readonly item_quantity: number;
  readonly item_description: string;
  readonly item_brand_id: Brand;
}
