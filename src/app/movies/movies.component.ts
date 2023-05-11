import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  movies : any[];

  constructor(){
    this.movies=[
      { title: 'The Shawshank Redemption', genre: 'Drama', director: 'Frank Darabont' },
      { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola' },
      { title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan' },
      { title: 'Pulp Fiction', genre: 'Crime', director: 'Quentin Tarantino' },
      { title: 'Forrest Gump', genre: 'Drama', director: 'Robert Zemeckis' }
    ]
  }

  getMovies(){
    return this.movies;
  }

  ngOnInit(): void {
    
  }

}
