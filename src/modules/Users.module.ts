import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersController } from './../controllers/Users.controller'
import { User, userSchema } from './../schemas/User.schema'
import { UsersService } from './../services/Users.service'

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: userSchema,
            },
        ]),
    ],
})
export class UsersModule {}
