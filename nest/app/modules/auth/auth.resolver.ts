import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginInput } from './dto/login.input';
import { AuthenticationError } from 'apollo-server-express';
import { I18nRequestScopeService, I18nContext, I18n } from 'nestjs-i18n';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly i18n: I18nRequestScopeService,
  ) {}

  @Mutation(() => Auth)
  async login(@Args('loginInput') loginInput: LoginInput) {
    const user = await this.authService.validateUser(loginInput);
    if (!user) {
      throw new AuthenticationError(
        await this.i18n.translate('auth.LOGIN_INVALID'),
      );
    }
    // console.log(this.authService.login(user));
    return this.authService.login(user);
  }
}
