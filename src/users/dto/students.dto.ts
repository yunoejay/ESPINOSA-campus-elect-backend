import { ApiProperty } from '@nestjs/swagger';
import { Student } from '@prisma/client';

export class ReturnStudentDto implements Partial<Student> {
    @ApiProperty({
        description:'unique identifier for the student',
        example: '123'
    })
    studentId: string;

    @ApiProperty({
        description: 'name of the student',
        example: 'Ex. Name'
    })
    name: string;

    @ApiProperty({
        description: 'department the students belongs to',
        example: 'information technology'
    })
    department: string;
    
    @ApiProperty({
        description: 'email of the student',
        example: '123123@email.com'
    })
    email: string;

    @ApiProperty({
        description: 'date the student was created',
        example: '2023-10-01T00:00:00.000Z',
        required: false,
    })
    createdAt?: Date;
}