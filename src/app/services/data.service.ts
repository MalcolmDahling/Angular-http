import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../interfaces/IDataService';
import { IOmdbResponse } from '../interfaces/IOmdbResponse';
import { Movie } from '../models/Movie';

@Injectable({
    providedIn: 'root'
})
export class DataService implements IDataService{

    constructor(private httpClient: HttpClient) { }

    getData(){
        this.httpClient
            .get<IOmdbResponse>('https://www.omdbapi.com/?apikey=f6e0fd65&s=star')
            .subscribe((data:IOmdbResponse) => {
                this.theData.next(data.Search);
            });
    }

    theData:Subject<Movie[]>;
}
