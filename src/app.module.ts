import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ReviewModule } from './review/review.module';
import { BookingModule } from './booking/booking.module';
import { RoomModule } from './room/room.module';
import { KosModule } from './kos/kos.module';
import { AuthModule } from './auth/auth.module';
import { FacilityModule } from './facility/facility.module';
   

@Module({
  imports: [PrismaModule, UsersModule, KosModule, RoomModule, BookingModule, ReviewModule, AuthModule, FacilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
