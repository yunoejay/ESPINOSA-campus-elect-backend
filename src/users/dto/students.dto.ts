import { ApiProperty } from '@nestjs/swagger';
import { Student } from '@prisma/client';

export class ReturnedStudentDto implements Partial<Student> {
    @ApiProperty({
        description: 'Unique identifier for the student',
        example: '123abc',
    })
    studentId: string;

    @ApiProperty({
        description: 'Name of the student',
        example: 'John Pork',
    })
    name: string;
    
    @ApiProperty({
        description: 'Department that the student belongs to',
        example: 'Computer Studies',
    })
    department: string;

    @ApiProperty({
        description: 'Email of the student',
        example: 'johnpork@gmail.com'
    })
    email: string;

    @ApiProperty({
        description: 'Role of the student',
        example: 'student'
    })
    role: string;
}