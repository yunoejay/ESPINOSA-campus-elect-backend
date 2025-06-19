import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReturnedStudentDto } from 'src/users/dto/students.dto'
import { Student} from '@prisma/client';
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
        description: 'list of all students',
        type: [ReturnedStudentDto]
    })
    async findAllStudents(): Promise<Student[]> {
        return await this.userService.findAllStudents();
    }

    @Get('students/find')
    async findStudentById(
        @Query('id') id: Student['studentId']
    ) {
        return await this.userService.findStudentById({
            id: id
        })
    }
}
