import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Student } from '@prisma/client';

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
}
