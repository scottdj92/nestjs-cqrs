import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Cart } from "./Cart";

@Resolver(Cart)
export class CartResolver {
    @Query(_ => Cart)
    async cart(
        @Args("id") id: string,
    ): Promise<Cart> {
        return {
            name: `hello, ${id}`,
            items: [],
        }
    }

    // @Query(() => [Cart])
    // async carts(
    //     @Args("ids") ids: string[],
    // ): Promise<Cart[]> {
    //     return [];
    //     // return ids.map((id) => ({ name: `hello, ${id}`}))
    // }
}
