import { ApiProperty } from '@nestjs/swagger';
import { CommitmentStatus } from '../../domain/entities/commitment_status.domain';

export class UserDto {
  @ApiProperty({
    example: '12345',
    description: 'Unique identifier of the user',
  })
  id: string;

  @ApiProperty({ example: 'John Doe', description: 'Name of the user' })
  name: string;

  @ApiProperty({ example: 40, description: 'Point of the user' })
  point: number;

  @ApiProperty({
    enum: CommitmentStatus,
    description: "Status of the user's commitment",
  })
  status: CommitmentStatus;

  constructor(
    id: string,
    name: string,
    point: number,
    status: CommitmentStatus,
  ) {
    this.id = id;
    this.name = name;
    this.point = point;
    this.status = status;
  }
}
