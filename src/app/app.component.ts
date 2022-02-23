import { Component } from '@angular/core';
import { IMovie } from './models/IMovie';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular-http';

    constructor(private service:DataService){}

   
    movies:IMovie[] = [];
    
    ngOnInit(){
        this.service.getData();
        this.service.movies$.subscribe(val => {
            this.movies = val;
            console.log(this.movies);
        });

        
    }
}

