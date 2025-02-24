import { Injectable } from '@nestjs/common';
import { Prismaservice } from 'src/prisma/prisma.service';
import { LocationDto, mapToLocationDto } from './dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(private db: Prismaservice) {}

  async getStreets(city: string, area?: string): Promise<LocationDto[]> {
    const result = await this.db.lokacijeIIT.findMany({
      distinct: ['ulica_ime_lat'],
      where: {
        opstina_ime_lat: { contains: city, mode: 'insensitive' },
        naselje_ime_lat: area
          ? { contains: area, mode: 'insensitive' }
          : undefined,
      },
    });

    return result.map(mapToLocationDto);
  }

  async getAllCities(): Promise<LocationDto[]> {
    const result = await this.db.lokacijeIIT.findMany({
      distinct: ['opstina_ime_lat'],
      select: {
        opstina_ime_lat: true,
        primary_key: true,
      },
    });

    return result.map(mapToLocationDto);
  }

  async getAreasPerCity(city: string): Promise<LocationDto[]> {
    const result = await this.db.lokacijeIIT.findMany({
      where: {
        opstina_ime_lat: city,
      },
      distinct: ['naselje_ime_lat'],
      select: {
        naselje_ime_lat: true,
        primary_key: true,
      },
    });

    return result.map(mapToLocationDto);
  }

  findAll() {
    return `This action returns all locations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }
}
