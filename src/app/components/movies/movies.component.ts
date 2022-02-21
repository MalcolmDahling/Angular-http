import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

    constructor(private service:DataService){}

    movies:IMovie[] = [];
    
    ngOnInit():void{
        this.service.getData().subscribe( (x) => (this.movies = x.Search) );
    }

}

