import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { KosService } from './kos.service';

@Controller('kos')
export class KosController {
  constructor(private kosService: KosService) {}

  @Post()
  create(@Body() data: any) {
    return this.kosService.create(data);
  }

  @Get()
  findAll() {
    return this.kosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kosService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.kosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kosService.remove(Number(id));
  }
}