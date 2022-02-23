import { Subject } from "rxjs";
import { IMovie } from "./IMovie";

export interface IDataService {
    getData():any;
    movies:Subject<IMovie[]>;
}