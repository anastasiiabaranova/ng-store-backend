import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemModule } from './cart-items/cart-item.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CartItemModule,
    PositionsModule
  ]
})
export class AppModule {
}
