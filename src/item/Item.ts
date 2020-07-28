import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Item {
    @Field()
    sku!: string;
}
