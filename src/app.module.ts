import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule, 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "bjepmrrmg79zkygqjmbv-mysql.services.clever-cloud.com",
      port: 3306,
      username: "ua60bfyzhpvhpzmt",
      password: "hqdSR16qPwLjnGcen0tV",
      database: "bjepmrrmg79zkygqjmbv",
      autoLoadEntities: true,
      synchronize: true,
    }), AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
