import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FacilityService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.facility.create({
      data,
    });
  }

  findAll() {
    return this.prisma.facility.findMany({
      include: { kos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.facility.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.facility.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.facility.delete({
      where: { id },
    });
  }
}