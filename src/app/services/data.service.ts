import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../models/IDataService';
import { IOmdbResponse } from '../models/IOmdbResponse';
import { IMovie } from '../models/IMovie';

@Injectable({
    providedIn: 'root'
})
export class DataService implements IDataService{

    constructor(private http: HttpClient) { }

    theData = new Subject<IMovie[]>();

    getData(){
        return this.http.get<IOmdbResponse>('https://www.omdbapi.com/?apikey=f6e0fd65&s=star')
    }

    
}
