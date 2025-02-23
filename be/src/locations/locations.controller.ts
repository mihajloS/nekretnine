import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('search')
  async search(
    @Query('query') query: string,
    @Query('type') type?: 'street' | 'city' | 'area', // Opcioni parametar
  ): Promise<LocationDto[]> {
    return await this.locationsService.search(query, type);
  }

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationsService.findOne(+id);
  }
}
