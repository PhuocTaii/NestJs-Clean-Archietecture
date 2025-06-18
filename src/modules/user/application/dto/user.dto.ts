import { ApiProperty } from "@nestjs/swagger";

export class UserDto{
    @ApiProperty({example: '12345', description: 'Unique identifier of the user'})
    id: string;
    
    @ApiProperty({example: 'John Doe', description: 'Name of the user'})
    name: string;
    
    @ApiProperty({example: 40, description: 'Point of the user'})
    point: number;
    
    constructor(id: string, name: string, point: number) {
        this.id = id;
        this.name = name;
        this.point = point;
    }
}