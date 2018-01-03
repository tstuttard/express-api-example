import { User } from '../models/User'

export interface UserRepositoryInterface {
  getAllUsers (): Array<User>
}
