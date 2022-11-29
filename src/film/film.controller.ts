import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param, Post, UseGuards,
} from '@nestjs/common';
import { FilmService } from './film.service';
import {AdminGuard, JwtAuthGuard} from "../auth/guards";

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.filmService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  getById(@Param() id: number) {
    return this.filmService.getById(id);
  }

  @Post("update/:name")
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, AdminGuard)
  updateFilms(@Param() name: string) {
    return this.filmService.update(name);
  }
}
