import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { UserService } from "../user.service";

@Injectable()
export class CheckUserExistMiddleware implements NestMiddleware {

  constructor(private readonly userService: UserService) {
  }

  async use(req: any, res: any, next: () => void) {

    const { email } = req.body;

    let userByEmail = await this.userService.findByParams({ email });

    if (userByEmail) {
      throw new HttpException("user is registered", HttpStatus.BAD_REQUEST);
    }

    next();
  }
}
