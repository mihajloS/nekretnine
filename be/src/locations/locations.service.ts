import { Injectable } from '@nestjs/common';
import { Prismaservice } from 'src/prisma/prisma.service';
import { LocationDto, mapToLocationDto } from './dto/location.dto';

@Injectable()
export class LocationsService {
  constructor(private db: Prismaservice) {}

  async search(
    query: string,
    _type?: 'street' | 'city' | 'area',
  ): Promise<LocationDto[]> {
    const result = await this.db.lokacijeIIT.findMany({
      where: {
        ulica_ime_lat: {
          contains: query, // Pronalazi sve gde 'ulica_ime_lat' sadrži 'query'
          mode: 'insensitive', // Opciono - ne razlikuje mala i velika slova
        },
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
