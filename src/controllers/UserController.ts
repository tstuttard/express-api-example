import 'reflect-metadata'
import { Controller, Get } from 'routing-controllers'
import { UserRepositoryInterface } from '../repositories/UserRepositoryInterface'

@Controller()
export class UserController {
  private userRepository: UserRepositoryInterface

  constructor (userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository
  }

  @Get('/users')
  getAll () {
    return this.userRepository.getAllUsers()
  }

}
