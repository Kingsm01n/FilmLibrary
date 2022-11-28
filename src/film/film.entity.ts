import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Film {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column()
  externalId: string;

  @Column()
  name: string;

  @Column()
  rating: number;

  @Column()
  scenarists: string;

  @Column()
  year: number;

  @Column()
  imageSrc: string;

  constructor(
    id: number,
    externalId: string,
    name: string,
    rating: number,
    scenarists: string,
    year: number,
  imageSrc: string
  ) {
    this.id = id;
    this.externalId = externalId;
    this.name = name;
    this.rating = rating;
    this.scenarists = scenarists;
    this.year = year;
    this.imageSrc = imageSrc;
  }
}

export const FilmSchema = SchemaFactory.createForClass(Film);
