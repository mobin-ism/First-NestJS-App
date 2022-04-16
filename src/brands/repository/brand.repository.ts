import { EntityRepository, Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

@EntityRepository(Brand)
export class BrandReposity extends Repository<Brand> {}
