import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartItemEntity } from '../entity/cart-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Controller('cart-items')
export class CartItemController {
  @InjectRepository(CartItemEntity)
  protected readonly entitiesRepository: Repository<CartItemEntity>;

  @Get()
  async getAll(): Promise<CartItemEntity[]> {
    return this.entitiesRepository.find();
  }

  @Post()
  async create(@Body() dto: Partial<CartItemEntity>): Promise<CartItemEntity> {
    const duplicate = await this.entitiesRepository.findOne({ id: dto.id })
    if (duplicate) {
      return this.entitiesRepository.save(
        Object.assign(
          { ...duplicate },
          { amount: duplicate.amount + dto.amount }
        )
      );
    }
    return this.entitiesRepository.save(dto);
  }

  @Put()
  update(@Body() dto: Partial<CartItemEntity>): Promise<UpdateResult> {
    return this.entitiesRepository.update(
      { id: dto.id }, dto
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.entitiesRepository.delete(id);
  }
}
