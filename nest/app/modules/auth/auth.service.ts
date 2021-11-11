import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'nest/app/modules/user/user.service';
import { compareSync } from 'bcrypt';
import { LoginInput } from './dto/login.input';
import { User } from 'nest/app/models';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginInput: LoginInput): Promise<any> {
    const user = await this.usersService.findFirst({
      email: {
        equals: loginInput.email,
      },
    });
    if (user && compareSync(loginInput.password, user.password)) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: '7d',
      }),
      user,
    };
  }
}
