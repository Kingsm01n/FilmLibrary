import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post, RequestMapping,
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

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  update() {
    return this.filmService.update();
  }

  @Delete('')
  @HttpCode(HttpStatus.OK)
  delete(@Param() id: number) {
    return this.filmService.delete(id);
  }
}
