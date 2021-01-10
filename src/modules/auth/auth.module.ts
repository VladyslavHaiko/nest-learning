import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

import { User, UserSchema } from "../../common/schemas";
import { UserService } from "../user/user.service";
import { AppConfigs } from "../../config/app.config";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [AuthService, UserService, LocalStrategy],

  imports: [UserModule, PassportModule,

    JwtModule.register({
      secret: AppConfigs.JWT_secret,
      signOptions: { expiresIn: "1d" }
    }),

    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],

  exports: [AuthService],
})


export class AuthModule {
}
