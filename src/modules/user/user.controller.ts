import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { dataHash } from "../../helpers";

@Controller("user")

export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getAll() {
    return this.userService.getHello();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() user : CreateUserDto) : Promise<CreateUserDto>{
    user.password = await dataHash.hashData(user.password);
    return this.userService.createUser(user);
  }
}
