// wiki.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Genre {
  name: string;
}

interface Anime {
  title: string;
  episodes: number;
  genres: Genre[];
  year: number;
  
  // Otras propiedades del anime según la API de Jikan Moe
}

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  animes: Anime[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ data: Anime[] }>('https://api.jikan.moe/v4/anime?q=&sfw=true')
      .subscribe(res => {
        console.log(res);
        this.animes = res.data;
      });
  }

  // Nueva función para formatear los géneros
  formatGenres(anime: Anime): string {
    return anime.genres.map(genre => genre.name).join(', ');
  }
}