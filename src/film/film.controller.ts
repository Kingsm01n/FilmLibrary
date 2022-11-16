import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.filmService.getAll();
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  getById(@Param() id: number) {
    return this.filmService.getById(id);
  }
}
