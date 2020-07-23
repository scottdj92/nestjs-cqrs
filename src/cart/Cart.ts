import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Cart {
    @Field()
    name!: string;
}
