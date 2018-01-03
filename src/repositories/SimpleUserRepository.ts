import { UserRepositoryInterface } from './UserRepositoryInterface'
import { User } from '../models/User'

export class SimpleUserRepository implements UserRepositoryInterface {
  getAllUsers (): Array<User> {
    return [
      new User('user1', 24, 'email@example.com'),
      new User('user2', 25, 'email@example.com'),
      new User('user3', 26, 'email@example.com')
    ]
  }
}
