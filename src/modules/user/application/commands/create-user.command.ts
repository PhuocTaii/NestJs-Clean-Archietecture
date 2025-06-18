import { ApiProperty } from '@nestjs/swagger';

export class CreateUserCommand {
  @ApiProperty({
    description: 'Name of the user',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Point of the user',
    example: 40,
  })
  point: number;

  constructor(name: string, point: number) {
    this.name = name;
    this.point = point;
  }
}
