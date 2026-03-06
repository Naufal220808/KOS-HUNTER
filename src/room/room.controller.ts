import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) { }

  @Post()
  create(@Body() data: any) {
    return this.roomService.create(data);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.roomService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(Number(id));
  }
}