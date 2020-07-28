import { Injectable } from "@nestjs/common";
import { Cart } from "./Cart";
import { AddCartItemsInput } from "./AddCartItemsInput";

@Injectable()
export class CartService {
    async saveItemsToCart(input: AddCartItemsInput): Promise<Cart> {
        return {
            name: `hello, ${input.id}`,
            items: input.items,
        };
        //TODO: save to db
    }

    async calculateGrandTotal(): Promise<number> {
        // TODO: fetch cart from db
        // run reduce over all item prices
        return 50;
    }
}
