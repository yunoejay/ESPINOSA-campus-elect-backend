import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PRESIDENT25_ID = "election-2025-president";

async function seedElections() {
    const election25 = await prisma.election.upsert({
        where: { id: "election-2025" },
        update: {},
        create: {
            id: "election-2025",
            name: "Election 2025",
            startDate: new Date("2025-05-26T00:00:00Z"),
            endDate: new Date("2025-06-26T23:59:59Z"),
            description: "University Student Council Elections 2025", 
            isActive: true
        }
    })

    await prisma.position.upsert({
        where: { id: PRESIDENT25_ID },
        update: {},
        create: {
            id: PRESIDENT25_ID,
            title: "President",
            Election: {
                connect: {
                    id: election25.id
                }
            }
        }
    })

    await prisma.student.upsert({
        where: { studentId: 'student-1' },
        update: {},
        create: {
            studentId: 'student-1',
            name: 'John Pork',
            email: 'johnpork@gmail.com',
            department: 'Information Technology',
            createdAt: new Date(),
        }
    })
    await prisma.student.upsert({
        where: { studentId: 'student-2' },
        update: {},
        create: {
            studentId: 'student-2',
            name: 'Pork John',
            email: 'porkjohn@gmail.com',
            department: 'Information Technology',
            createdAt: new Date(),
        }
    })
    await prisma.student.upsert({
        where: { studentId: 'student-3' },
        update: {},
        create: {
            studentId: 'student-3',
            name: 'Kentavious Pope',
            email: 'kentaviouspope@gmail.com',
            department: 'Computer Science',
            createdAt: new Date(),
        }
    })

    await prisma.candidate.upsert({
        where: { candidateId: 'candidate-1' },
        update: {},
        create: {
            candidateId: 'candidate-1',
            Position: {
                connect: {
                    id: PRESIDENT25_ID
                }
            },
            Student: {
                connect: {
                    studentId: 'student-1'
                }
            }
        }
    })

    await prisma.candidate.upsert({
        where: { candidateId: 'candidate-2' },
        update: {},
        create: {
            candidateId: 'candidate-2',
            Position: {
                connect: {
                    id: PRESIDENT25_ID
                }
            },
            Student: {
                connect: {
                    studentId: 'student-2'
                }
            }
        }
    })
}

async function main() {
    console.log("SEEDING DATABASE..");

    await seedElections();

    console.log("FINISHED SEEDING.");
}

void main()