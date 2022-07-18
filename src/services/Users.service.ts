import { Injectable } from '@nestjs/common'
import { UserInterface } from 'src/interfaces/User.interface.interface'
import { AuthUserInterface } from 'src/interfaces/AuthUser.interface'
@Injectable()
export class UsersService {
    createUser(newUserData: UserInterface) {
        console.log(newUserData)
    }
    authLogin(credentials: AuthUserInterface) {
        console.log(credentials)
    }
}