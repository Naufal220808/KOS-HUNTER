import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.booking.create({
      data,
    });
  }

  findAll() {
    return this.prisma.booking.findMany();
  }

  findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.booking.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}