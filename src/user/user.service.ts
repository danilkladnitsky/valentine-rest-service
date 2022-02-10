import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_SERVICE } from 'src/const';

@Injectable()
export class UserService {
  constructor(@Inject(USERS_SERVICE) private client: ClientProxy) {}

  async authUser(code: string) {
    try {
      const result = await this.client.send('auth.user', { code }).toPromise();
      return result;
    } catch (err) {
      console.log(err);
      return 'Произошла ошибка при авторизации';
    }
  }
  async getUsers() {
    try {
      const result = await this.client
        .send('get.users', 'Hello World')
        .toPromise();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
