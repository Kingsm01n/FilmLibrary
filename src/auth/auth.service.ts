import {Injectable} from '@nestjs/common';
import {User} from '../user/user.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) {
  }

  login(user: User) {

  }

  signup(user: User) {
    const newUser =  this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}
