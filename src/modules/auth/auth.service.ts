import { HttpException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { dataHash } from "../../helpers";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../../common/schemas";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {


  constructor(
    private jwtService: JwtService,
    private usersService: UserService,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByParams({ email });

    if (!user) {
      throw new HttpException("no user", 400);
    }

    const checkPass = await dataHash.compareData(pass, user.password);

    if (!checkPass) {
      throw new HttpException("invalid password", 400);
    }

    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

}
