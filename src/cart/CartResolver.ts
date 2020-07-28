import { Resolver, Query, Args, Mutation, ResolveField, Int } from "@nestjs/graphql";
import { Cart } from "./Cart";
import { AddCartItemsInput } from "./AddCartItemsInput";
import { CartService } from "./CartService";

@Resolver(Cart)
export class CartResolver {
    constructor(
        private cartService: CartService,
    ) {}
    @Query(_ => Cart)
    async cart(
        @Args("id") id: string,
    ): Promise<Cart> {
        return {
            name: `hello, ${id}`,
            items: [{ sku: "1" }]
        }
    }
    @Mutation(_ => Cart)
    async addItem(
        @Args("input") input: AddCartItemsInput,
    ): Promise<Cart> {
        return this.cartService.saveItemsToCart(input);
    }

    @ResolveField(_ => Int)
    grandTotal(): Promise<number> {
        return this.cartService.calculateGrandTotal();
    }
}
