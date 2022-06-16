import {Module} from '@nestjs/common';
import {NftController} from './nft.controller';
import {NftService} from "./nft.service";
import {RequestModule} from "../request/request.module";

@Module({
    controllers: [NftController],
    providers: [NftService],
    imports: [RequestModule]
})
export class NftModule {
}
