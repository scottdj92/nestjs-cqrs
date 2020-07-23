import { Resolver, Query, Args } from "@nestjs/graphql";
import { Cart } from "./Cart";

@Resolver(Cart)
export class CartResolver {
    constructor() { }

    @Query(_ => Cart)
    async cart(
        @Args("id") id: string,
    ): Promise<any> {
        return {
            name: `hello, ${id}`
        }
    }
}
