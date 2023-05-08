import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
    /* id:         string; Mongo me lo da */

    @Prop({
        unique: true,
        index: true
    })
    name:       string;
    @Prop({
        index: true
    })
    priceSale:  number;
    @Prop({
        index: true
    })
    priceCost:  number;
    @Prop({
        index: true
    })
    category:   string;

}

export const ProductSchema = SchemaFactory.createForClass( Product );
