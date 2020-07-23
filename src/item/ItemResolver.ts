import { Resolver, Args, Query } from "@nestjs/graphql";
import { Item } from "./Item";

@Resolver(Item)
export class ItemResolver {
    @Query(_ => Item)
    async item(
        @Args("sku") sku: string,
    ): Promise<Item> {
        return { name: `item: ${sku}` }
    }
}
