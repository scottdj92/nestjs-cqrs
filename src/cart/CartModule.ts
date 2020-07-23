import { Module } from "@nestjs/common";
import { CartResolver } from "./CartResolver";

@Module({
    providers: [CartResolver]
})
export class CartModule { }
