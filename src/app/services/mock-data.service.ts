import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../models/IDataService';
import { IMovie } from '../models/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService{

  constructor() {}
    getData() {}
    theData = new Subject<IMovie[]>();
}
