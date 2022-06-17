import {HttpService} from '@nestjs/axios';
import {
    Injectable,
} from '@nestjs/common';

@Injectable()
export class RequestService {

    constructor(private httpService: HttpService) {
    }

    findAll() {
       // Replace with your Alchemy API key:
        const apiKey = String(process.env.API_KEY);
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
// Replace with the wallet address you want to query:
        const ownerAddr = "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c";
        const fetchURL = `${baseURL}?owner=${ownerAddr}`;

        console.log(this.httpService.get(fetchURL))
        return this.httpService.get(fetchURL);
    }

}
