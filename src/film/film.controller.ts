import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param, Post,
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

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getById(@Param() id: number) {
    return this.filmService.getById(id);
  }

  @Post("update/:name")
  @HttpCode(HttpStatus.OK)
  updateFilms(@Param() name: string) {
    return this.filmService.update(name);
  }
}
