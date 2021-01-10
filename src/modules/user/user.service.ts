import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../../common/schemas";
import { CreateUserDto, UserDto } from "./dto";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async createUser(newUser: Partial<UserDto>): Promise<Partial<CreateUserDto>> {
    return await new this.userModel(newUser).save();
  }

  async findByParams(findObj: Partial<UserDto>): Promise<UserDto | null> {
    return this.userModel.findOne(findObj).exec();
  }

  async confirmUser(_id: string): Promise<UserDto> {
    return this.userModel.update({ _id }, { activated: true });
  }
}
