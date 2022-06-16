import { Module } from '@nestjs/common';
import { NftService } from './nft/nft.service';
import { NftModule } from './nft/nft.module';
import { NftController } from './nft/nft.controller';
import { RequestService } from './request/request.service';
import { RequestModule } from './request/request.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [NftModule, RequestModule,HttpModule],
  controllers: [NftController],
  providers: [],
})
export class AppModule {}
