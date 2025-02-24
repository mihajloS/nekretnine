import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('getStreets')
  async getStreets(
    @Query('city') city: string,
    @Query('area') area?: string,
  ): Promise<LocationDto[]> {
    return await this.locationsService.getStreets(city, area);
  }

  @Get('getAllCities')
  async getAllCities(): Promise<LocationDto[]> {
    return await this.locationsService.getAllCities();
  }

  @Get('getAreasPerCity')
  async getAreasPerCity(@Query('city') city: string): Promise<LocationDto[]> {
    return await this.locationsService.getAreasPerCity(city);
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
