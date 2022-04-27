import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemEntity } from '../entity/cart-item.entity';
import { CartItemController } from './cart-item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    CartItemEntity
  ])],
  controllers: [CartItemController]
})
export class CartItemModule {
}
