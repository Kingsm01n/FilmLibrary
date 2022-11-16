import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  async login(user: User) {}

  async signup(user: User) {}
}
