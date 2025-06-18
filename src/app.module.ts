import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './shared/config/database.config';
import { UserModule } from './modules/user/user.module';
import { HeaderGuard } from './shared/security/header-guard.security';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: databaseConfig,
    }),
    UserModule,
  ],
  providers: [
    {
      provide: 'ConfigService',
      useClass: ConfigService,
    },
    {
      provide: 'HeaderGuard',
      useClass: HeaderGuard,
    },
  ],
})
export class AppModule {}
