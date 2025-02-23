import { LokacijeIIT } from '@prisma/client';

export class LocationDto {
  streetid: string;
  ulica_maticni_broj: string;
  ulica_ime: string;
  ulica_ime_lat: string;
  tip: string;
  tip_lat: string;
  created: string;
  modificationdate: string;
  retired: string;
  naselje_maticni_broj: string;
  naselje_ime: string;
  naselje_ime_lat: string;
  opstina_maticni_broj: string;
  opstina_ime: string;
  opstina_ime_lat: string;
  primary_key: string;
  wkt: string;
}

export function mapToLocationDto(data: LokacijeIIT): LocationDto {
  const locationDto = new LocationDto();
  locationDto.streetid = data.streetid;
  locationDto.ulica_maticni_broj = data.ulica_maticni_broj;
  locationDto.ulica_ime = data.ulica_ime;
  locationDto.ulica_ime_lat = data.ulica_ime_lat;
  locationDto.tip = data.tip;
  locationDto.tip_lat = data.tip_lat;
  locationDto.created = data.created;
  locationDto.modificationdate = data.modificationdate;
  locationDto.retired = data.retired;
  locationDto.naselje_maticni_broj = data.naselje_maticni_broj;
  locationDto.naselje_ime = data.naselje_ime;
  locationDto.naselje_ime_lat = data.naselje_ime_lat;
  locationDto.opstina_maticni_broj = data.opstina_maticni_broj;
  locationDto.opstina_ime = data.opstina_ime;
  locationDto.opstina_ime_lat = data.opstina_ime_lat;
  locationDto.primary_key = data.primary_key;
  locationDto.wkt = data.wkt;
  return locationDto;
}
