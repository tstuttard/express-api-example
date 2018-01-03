import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import { UserController } from './controllers/UserController'

const server = createExpressServer({
  controllers: [UserController]
})

server.listen(3000, () => {
  console.log(`Server started on port 3000`)
})
