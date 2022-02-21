import { Subject } from "rxjs";
import { Movie } from "../models/Movie";

export interface IDataService{
    getData():void;

    theData:Subject<Movie[]>;
}