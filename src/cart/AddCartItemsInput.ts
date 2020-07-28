import { InputType, Field } from "@nestjs/graphql";
import { ItemInput } from "./ItemInput";

@InputType()
export class AddCartItemsInput {
    @Field()
    id!: string;

    @Field(_ => [ItemInput])
    items!: ItemInput[];
}
