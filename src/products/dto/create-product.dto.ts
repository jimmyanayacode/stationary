import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(3)
    name:       string;
    @IsInt()
    @IsPositive()
    @Min(1)
    readonly priceSale:  number;
    @IsInt()
    @IsPositive()
    @Min(1)
    readonly priceCost:  number;
    @IsString()
    @MinLength(1)
    readonly category:   string;

}