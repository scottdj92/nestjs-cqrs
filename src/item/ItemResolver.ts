import { Resolver, Query, Args } from "@nestjs/graphql";
import { Item } from "./Item";

@Resolver(Item)
export class ItemResolver {
    @Query(_ => Item)
    async item(
        @Args("id") id: string,
    ): Promise<Item> {
        return {
            sku: "1"
        }
    }
}
