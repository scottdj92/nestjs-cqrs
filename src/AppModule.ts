import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CartModule } from "@app/cart/CartModule";

@Module({
    imports: [
        GraphQLModule.forRoot({
            path: "/graphql",
            autoSchemaFile: "src/schema.graphql",
        }),
        CartModule,
    ]
})
export class AppModule { }
