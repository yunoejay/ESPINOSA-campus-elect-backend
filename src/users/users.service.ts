import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Student } from '@prisma/client';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    /**
     * @returns
     */

    async findAllStudents(): Promise<Student[]> {
        const students = await this.prisma.student.findMany();

        if (!students || students.length < 1) {
            throw new Error("No Students!")
        }

        return students
    }

    /**
     * Retrieves a student by their ID from the database
     * @returns 
     */

    async findStudentById({ id }: {id: Student['studentId']}): Promise<Student> {
        const students = await this.prisma.student.findUnique({
            where: {
                studentId: id,
            }
        })

        if (!students) {
            // Use NotFoundException for proper HTTP handling
            // @see @nest/common
            throw new NotFoundException("Student not found.")
        }

        return students;
    }
}
