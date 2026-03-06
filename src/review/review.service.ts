import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.review.create({
      data: {
        userId: data.userId,
        kosId: data.kosId,
        rating: data.rating,
        comment: data.comment,
      },
    });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  findOne(id: number) {
    return this.prisma.review.findUnique({
      where: { id },
    });
  }

  update(id: number, data: any) {
    return this.prisma.review.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}