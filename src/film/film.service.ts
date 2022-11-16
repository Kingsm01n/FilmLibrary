import { Injectable } from '@nestjs/common';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  public mockedFilm: Film = new Film(
    1,
    1,
    'Star Wars',
    'Best Film EVER',
    100,
    null,
  );

  async getAll() {
    return Array.of(this.mockedFilm);
  }

  async getById(id: number) {
    return this.mockedFilm;
  }

  async update() {}

  async delete(id: number) {}
}
