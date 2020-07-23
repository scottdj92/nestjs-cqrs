import { Module } from "@nestjs/common";
import { ItemResolver } from "./ItemResolver";

@Module({
    providers: [ItemResolver]
})
export class ItemModule { }
