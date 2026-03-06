import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.kos.create({
      data: {
        name: data.name,
        address: data.address,
        description: data.description,
        ownerId: data.ownerId,
      },
    });
  }

  findAll() {
    return this.prisma.kos.findMany({
      include: {
        rooms: true,
        facilities: true,
        reviews: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.kos.findUnique({
      where: { id },
      include: {
        rooms: true,
        facilities: true,
      },
    });
  }

  update(id: number, data: any) {
    return this.prisma.kos.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.kos.delete({
      where: { id },
    });
  }
}