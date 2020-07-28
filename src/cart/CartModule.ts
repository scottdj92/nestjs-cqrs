import { Module } from "@nestjs/common";
import { CartResolver } from "./CartResolver";
import { CartService } from "./CartService";

@Module({
    providers: [CartResolver, CartService]
})
export class CartModule {}
