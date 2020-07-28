import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CartModule } from "./cart/CartModule";
import { ItemModule } from "./item/ItemModule";

@Module({
    imports: [
        GraphQLModule.forRoot({
            path: "/graphql",
            autoSchemaFile: "src/schema.graphql"
        }),
        CartModule,
        ItemModule,
    ]
})
export class AppModule { }
