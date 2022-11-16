export class Film {
  id: number;
  externalId: number;
  name: string;
  description: string;
  rating: number;
  actors: string;

  constructor(
    id: number,
    externalId: number,
    name: string,
    description: string,
    rating: number,
    film: string,
  ) {
    this.id = id;
    this.externalId = externalId;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.actors = film;
  }
}
