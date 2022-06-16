import { ExecutionContext, Injectable } from '@nestjs/common';
import { Nft } from './nft.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NftService {
  constructor(@InjectModel(Nft) private nftRepository: typeof Nft) {}

  async getNFT() {
  }
}
