import { ExecutionContext, Injectable } from '@nestjs/common';
import { Nft } from './nft.model';
import { InjectModel } from '@nestjs/sequelize';
import fetch from 'node-fetch';
import {RequestService} from "../request/request.service";



@Injectable()
export class NftService {
  constructor(@InjectModel(Nft) private nftRepository: typeof Nft) {}
 // const apiKey = String(process.env.API_KEY);
/*  async getNFT() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

// Replace with your Alchemy API key:
    const apiKey = String(process.env.API_KEY);
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
// Replace with the wallet address you want to query:
    const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
    const fetchURL = `${baseURL}?owner=${ownerAddr}`;


    fetch(fetchURL, requestOptions)
        .then(response => response.json())
        .then(response => JSON.stringify(response, null, 2))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));*/

}
