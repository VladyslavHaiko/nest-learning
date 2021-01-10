import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./modules/products/products.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AppConfigs } from "./config/app.config";
import { ScheduleModule } from "@nestjs/schedule";
import { UserModule } from "./modules/user/user.module";
import { verifyCodeModule } from "./modules/verify-code/verify-code.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    verifyCodeModule,
    ProductsModule,
    AuthModule,
    UserModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(AppConfigs.mongoURL)],

  controllers: [AppController],

  providers: [AppService]
})

export class AppModule {
}
