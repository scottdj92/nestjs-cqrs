import { ObjectType, Field } from "@nestjs/graphql";
import { Item } from "@app/item/Item";

@ObjectType()
export class Cart {
    @Field()
    name!: string;

    @Field(_ => [Item])
    items!: Item[];
}
