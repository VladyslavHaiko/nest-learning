import { Module } from "@nestjs/common";
import { VerifyCodeService } from "./verify-code.service";
import { MongooseModule } from "@nestjs/mongoose";
import { VerifyCode, VerifyCodeSchema } from "../../common/schemas";

@Module({
  providers: [VerifyCodeService],
  imports: [MongooseModule.forFeature([
    { name: VerifyCode.name, schema: VerifyCodeSchema }
  ])],
  exports: [VerifyCodeService]
})

export class verifyCodeModule {
}
