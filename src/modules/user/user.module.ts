import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../common/schemas/user.schema";

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema }
  ])]
})

export class UserModule {
}
