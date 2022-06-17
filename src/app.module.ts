import { Module } from '@nestjs/common';
import { NftModule } from './nft/nft.module';
import { NftController } from './nft/nft.controller';
import { RequestModule } from './request/request.module';
import { HttpModule } from '@nestjs/axios';
import { SequelizeModule } from '@nestjs/sequelize';
import {Nft} from "./nft/nft.model";
require('dotenv').config()


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: process.env.POSTGRES_DATABASE,
    models: [Nft],
    autoLoadModels: true,
  }),NftModule,RequestModule,HttpModule
   ],
  controllers: [NftController],
  providers: [],
})
export class AppModule {}
