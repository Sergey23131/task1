import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FindNftDto {
  @ApiProperty({ example: '****', description: 'link of user' })
  @IsString({ message: 'userlink must be string ' })
  readonly userlink: string;
}
