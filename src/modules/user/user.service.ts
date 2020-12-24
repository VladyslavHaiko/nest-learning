import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../../common/schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import {dataHash} from '../../helpers';
@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  getHello(): string {
    return "Hello World!";
  }

   createUser(newUser: CreateUserDto): Promise<CreateUserDto> {
    const userToCreate = new this.userModel(newUser);

    return userToCreate.save();
  }
}
