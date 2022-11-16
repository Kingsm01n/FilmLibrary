import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
  async getAll() {
    return this.get();
  }

  async getById(id: number) {
    return this.get(id);
  }

  async get(id? :number) {
    const axios = require('axios');

    if(!id) {
      const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'star wars'},
        headers: {
          'X-RapidAPI-Key': '7f260cf98cmshbcea1f0cec0824fp1b8e5bjsnc8ba46d3963f',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    } else {
      const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {id: id},
        headers: {
          'X-RapidAPI-Key': '7f260cf98cmshbcea1f0cec0824fp1b8e5bjsnc8ba46d3963f',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
}
