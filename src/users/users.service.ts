import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Student } from '@prisma/client';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

@Injectable()
export class UsersService {
     constructor(private prisma: PrismaService) {}

    /**
     * Retrieves all students from the db
     * @returns A promise that resolves to an array of student objects
     */
    async findAllStudents(): Promise<Student[]> {
        return this.prisma.student.findMany();
    }

    async findStudentbyID({ id }: { id: Student['studentId'] }) : Promise<Student> {
        const student = await this.prisma.student.findUnique({
            where: {
                studentId: id
            }
        })
        /**
         * retrieves a student by their ID from the database.
         * 
         * @returns
         */
        if (!student) {
            // Use NotFoundException for proper HTTP error handling
            // @see @nestjs/common
            throw new NotFoundException('student not found.')
        }

        return student;
    }

    async createStudent(data: {
        studentId: string;
        name: string;
        email: string;
        department: string;
        createdAt?: Date | string;
    }): Promise<Student> {
        return this.prisma.student.create({
            data: data
        });
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
