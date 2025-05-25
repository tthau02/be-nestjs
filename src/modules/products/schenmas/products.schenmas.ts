import  {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose';
import { IProduct } from 'src/interfaces/product.interfaces';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product implements IProduct {
    @Prop({required: true, min: 6})
    name: string

    @Prop ()
    description: string

    @Prop({required: true, min: 0})
    price: number

    @Prop({required: true})
    quantity: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)