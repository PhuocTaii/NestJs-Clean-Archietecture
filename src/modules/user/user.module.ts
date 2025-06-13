import { Module } from '@nestjs/common';
import { UserController } from './interfaces/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserServiceImpl } from './application/services/service-impl/user.service-impl';
import { UserRepositoryImpl } from './infrastructure/repositories/repository-impl.ts/user.repository-impl';
import { UserEntity } from './infrastructure/persistence/user.entity';
import { CreateUserHandler } from './application/commands/handlers/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { FindAllUsersHandler } from './application/queries/handlers/find-all-users.handler';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), CqrsModule],
  controllers: [UserController],
  //Services & Repositories
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
    {
      provide: 'UserService',
      useClass: UserServiceImpl,
    },
    {
      provide: 'CreateUserHandler',
      useClass: CreateUserHandler,
    },
    {
      provide: 'FindAllUsersQuery',
      useClass: FindAllUsersHandler,
    },
  ],
  exports: [TypeOrmModule],
})
export class UserModule {}
