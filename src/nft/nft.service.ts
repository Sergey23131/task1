import { ExecutionContext, Injectable } from '@nestjs/common';
import { Nft } from './nft.model';
import { InjectModel } from '@nestjs/sequelize';
import fetch from 'node-fetch';



@Injectable()
export class NftService {
  constructor(@InjectModel(Nft) private nftRepository: typeof Nft) {}

}
