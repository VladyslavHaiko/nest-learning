import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { VerifyCode, VerifyCodeDocument } from "../../common/schemas";
import { Model } from "mongoose";
import { CreateVerifyCodeDto } from "./dto/createCode";

@Injectable()
export class VerifyCodeService {
  constructor(
    @InjectModel(VerifyCode.name) private VerifyCoderModel: Model<VerifyCodeDocument>) {
  }

  createVerifyCode(verifyParams: CreateVerifyCodeDto): Promise<CreateVerifyCodeDto> {
    return new this.VerifyCoderModel(verifyParams).save();
  }

  findById(user_id: string): Promise<CreateVerifyCodeDto> {
    return this.VerifyCoderModel.findOne({ user_id }).exec();
  }

  deleteCode(user_id: string) {
    return this.VerifyCoderModel.deleteOne({ user_id });
  }


}
