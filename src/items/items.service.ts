import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  
  getAll(): string {
    return 'Hello World!';
  }

  
}
