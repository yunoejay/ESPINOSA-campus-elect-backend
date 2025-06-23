import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ReturnedStudentDto } from 'src/users/dto/students.dto'
import { Student} from '@prisma/client';
import { Query } from '@nestjs/common';
import { Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get("students")
    @ApiOperation({
        summary: 'get all students',
        description: 'returns a list of all students in the system'
    })
    @ApiResponse({
        status: 200,
        description: 'list of all students retrieved successfully',
        type: [ReturnedStudentDto]
    })

    async findallStudents(): Promise<Student[]> {
        return await this.userService.findAllStudents();
    }


    @Get('students/find')
    @ApiQuery({ name: 'id', type: String, description: 'Student ID' })
    async findStudentById(
        @Query('id') id: Student['studentId']
    ) {
        return await this.userService.findStudentbyID({
            id: id
        })
    }

    @Get('students/create')
    @ApiOperation({
        summary: 'create a new student',
        description: 'creates a new student in the system'
    })
    @ApiResponse({
        status: 201,
        description: 'student created successfully',
        type: ReturnedStudentDto
    })
    async createStudent(
        @Query('studentId') studentId: string,
        @Query('name') name: string,
        @Query('email') email: string,
        @Query('department') department: string,
        @Query('createdAt') createdAt?: Date | string
    ): Promise<Student> {
        return await this.userService.createStudent({
            studentId,
            name,
            email,
            department,
            createdAt
        });
    }
}
