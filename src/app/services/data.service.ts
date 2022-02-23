import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../models/IDataService';
import { IMovie } from '../models/IMovie';
import { IOmdbResponse } from '../models/IOmdbResponse';

@Injectable({
     providedIn: 'root'
})
export class DataService implements IDataService {

    constructor(private http:HttpClient) { }

    movies = new Subject<IMovie[]>();
    movies$ = this.movies.asObservable();
    

    getData(){
        this.http
            .get<IOmdbResponse>('https://www.omdbapi.com/?apikey=f6e0fd65&s=star')
            .subscribe((data:IOmdbResponse) => {
                this.movies.next(data.Search);
            });
    }


}
