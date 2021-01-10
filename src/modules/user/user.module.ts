import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../common/schemas";
import { verifyCodeModule } from "../verify-code/verify-code.module";
import { CheckUserExistMiddleware } from "./middleware";
import { AuthService } from "../auth/auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AppConfigs } from "../../config/app.config";

@Module({
  providers: [UserService, AuthService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    verifyCodeModule,
    JwtModule.register({
      secret: AppConfigs.JWT_secret,
      signOptions: { expiresIn: "60s" }
    }),
  ],
  exports: [UserService]
})

export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckUserExistMiddleware).forRoutes({ path: "user", method: RequestMethod.POST });
  }
}
