export class Film {
  id: number;
  externalId: number;
  name: string;
  description: string;
  rating: number;
  film: File;

  constructor(
    id: number,
    externalId: number,
    name: string,
    description: string,
    rating: number,
    film: File,
  ) {
    this.id = id;
    this.externalId = externalId;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.film = film;
  }
}
