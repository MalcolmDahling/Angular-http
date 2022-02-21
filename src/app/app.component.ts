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

    constructor(){}

   
    
    ngOnInit(){
           
    }
}
 