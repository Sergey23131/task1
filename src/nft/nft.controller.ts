import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindNftDto } from './dto/find.nft.dto';
import { NftService } from './nft.service';
import { Nft } from './nft.model';
import { RequestService } from 'src/request/request.service';

@ApiTags('Nft')
@Controller('nft')
export class NftController {
  constructor(private nftService: NftService) {}

  @ApiOperation({ summary: 'Get all nft' })
  @ApiResponse({ status: 201, type: [Nft] })
  @UseGuards(RequestService)
  @Get()
  getAllNFT(@Body() nftDto: FindNftDto) {
    return this.nftService.getNFT();
  }
}
