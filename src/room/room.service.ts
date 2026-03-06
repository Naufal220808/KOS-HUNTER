import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.room.create({
      data: {
        kosId: data.kosId,
        name: data.name,
        price: data.price,
        gender: data.gender,
      },
    });
  }

  findAll() {
    return this.prisma.room.findMany({
      include: { kos: true },
    });
  }

  update(id: number, data: any) {
    return this.prisma.room.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}