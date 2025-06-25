import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ReturnStudentDto } from 'src/users/dto/students.dto';
import { Student } from '@prisma/client'
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
        type: [ReturnStudentDto]
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

    @Post('students/create')
    @ApiOperation({
        summary: 'create a new student',
        description: 'creates a new student in the system'
    })
    @ApiResponse({
        status: 201,
        description: 'student created successfully',
        type: ReturnStudentDto
    })

    async createStudent(
        @Body() studentData: ReturnStudentDto
    ): Promise<Student> {
        return await this.userService.createStudent(studentData);
    }
}