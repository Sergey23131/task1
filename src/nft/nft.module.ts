import {Module} from '@nestjs/common';
import {NftController} from './nft.controller';
import {NftService} from "./nft.service";
import {RequestModule} from "../request/request.module";
import {Nft} from "./nft.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    controllers: [NftController],
    providers: [
        NftService,
        ],
    imports: [SequelizeModule.forFeature([Nft])],
    exports:[NftService]

})
export class NftModule {
}
