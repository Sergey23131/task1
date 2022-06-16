import { Module } from '@nestjs/common';
import { NftService } from './nft/nft.service';
import { NftModule } from './nft/nft.module';
import { NftController } from './nft/nft.controller';
import { RequestService } from './request/request.service';
import { RequestModule } from './request/request.module';

@Module({
  imports: [NftModule, RequestModule],
  controllers: [NftController],
  providers: [],
})
export class AppModule {}
