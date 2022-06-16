import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'nft' })
export class Nft extends Model<Nft> {
  @ApiProperty({ example: '****', description: 'Nft of user' })
  @Column({ type: DataType.STRING, allowNull: false })
  userNft: string;
}
