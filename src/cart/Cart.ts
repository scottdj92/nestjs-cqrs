import { ObjectType, Field } from "@nestjs/graphql";
import { Item } from "../item/Item";

@ObjectType()
export class Cart {
    @Field()
    name!: string;

    @Field(_ => [Item])
    items!: any[];
}
