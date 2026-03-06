import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FacilityService } from './facility.service';

@Controller('facility')
export class FacilityController {
  constructor(private facilityService: FacilityService) {}

  @Post()
  create(@Body() data: any) {
    return this.facilityService.create(data);
  }

  @Get()
  findAll() {
    return this.facilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilityService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.facilityService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilityService.remove(Number(id));
  }
}