import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class ItemInput {
    @Field()
    sku!: string;
}
