import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Category extends Document {

    @Prop({
        unique: true,
        index: true
    })
    name: string;
    createdAt: number;
    updatedAt?: number;

}

export const CategorySchema = SchemaFactory.createForClass( Category );