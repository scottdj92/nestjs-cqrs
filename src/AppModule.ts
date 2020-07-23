import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CartModule } from "@app/cart/CartModule";

@Module({
    imports: [
        GraphQLModule.forRoot({
            path: "/graphql",
            autoSchemaFile: true,
        }),
        CartModule,
    ]
})
export class AppModule { }
