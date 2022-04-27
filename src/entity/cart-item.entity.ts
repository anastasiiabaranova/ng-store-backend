import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class CartItemEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    amount: number;
}
