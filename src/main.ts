import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import path from "path";
import { AppModule } from "./AppModule";

async function main() {
    const app = await NestFactory.create(AppModule);

    const port = 3000;

    await app.listen(port);

    Logger.log(`Server started at: http://localhost:${port}`, "NestApplication");
}

main();
