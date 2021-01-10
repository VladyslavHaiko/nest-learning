import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
} from "@nestjs/common";

import { UserService } from "./user.service";
import { CreateUserDto } from "./dto";

import { createVerifyCode, dataHash } from "../../helpers";
import { VerifyCodeService } from "../verify-code/verify-code.service";
import { CreateVerifyCodeDto } from "../verify-code/dto/createCode";
import { JwtAuthGuard, LocalAuthGuard } from "./guards";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("user")

export class UserController {

  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
    private readonly verifyCodeService: VerifyCodeService) {

  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() user: CreateUserDto): Promise<CreateVerifyCodeDto> {

    user.password = await dataHash.hashData(user.password);

    const createdUser = await this.userService.createUser(user);

    return this.verifyCodeService.createVerifyCode(
      {
        user_id: createdUser._id,
        code: createVerifyCode()
      });

  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(":_id")
  async confirmUser(@Body() body, @Param() params) {
    const { _id } = params;
    const { verifyCode } = body;

    const userCode = await this.verifyCodeService.findById(_id);

    if (!userCode) {
      throw new HttpException("error", HttpStatus.FORBIDDEN);
    }

    if (verifyCode !== userCode.code) {
      throw new HttpException("now code", HttpStatus.FORBIDDEN);

    }
    await this.userService.confirmUser(_id);
    await this.verifyCodeService.deleteCode(_id);
    return true;
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return 'req.user';
  }
}
