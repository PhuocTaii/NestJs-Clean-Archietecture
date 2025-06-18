import { Module } from '@nestjs/common';
import { UserController } from './interfaces/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserServiceImpl } from './application/services/user.service-impl';
import { UserEntity } from './infrastructure/persistence/user.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers, QueryHandlers } from './application/user.handlers';
import { UserRepositoryImpl } from './infrastructure/repositories/user.repository-impl';

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
    ...CommandHandlers,
    ...QueryHandlers,
  ],
  exports: [TypeOrmModule],
})
export class UserModule {}
