import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RestaurantsModule } from './restaurants/restaurants.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //어플리케이션의 어디서나 config파일에 접근 가능
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev','prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: +process.env.DB_PORT, 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME, 
      synchronize: true, //데이터베이스를 너의 모듈의 현재상태로 마이그레이션 한다.
      logging: true, //데이터베이스에서 무슨 일이 일어나는지 콘솔에 표시함 
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }), 
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
