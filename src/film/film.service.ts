import {Injectable} from '@nestjs/common';
import {Film} from './film.entity';


@Injectable()
export class FilmService {
    async getAll() {
    }

    async getById(id: number) {
    }

    async get(name: any) {
        const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: name.name},
            headers: {
                'X-RapidAPI-Key': '7f260cf98cmshbcea1f0cec0824fp1b8e5bjsnc8ba46d3963f',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response)
            var data = response.data;
            console.log(response.data.d)
            var films = new Array();

            data.d.forEach(data => {
                films.push(new Film(
                    null,
                    data.id,
                    data.l,
                    data.rank,
                    data.s,
                    data.y,
                    data.i.imageUrl
                    )
                );
            })
            return films;
        }).catch(function (error) {
            console.error(error);
        });
    }

    update(name: string) {
        var films = this.get(name);
    }
}
