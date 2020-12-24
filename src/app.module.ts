import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { AppConfigs }  from "./config/app.config";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(AppConfigs.mongoURL)],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {
}
