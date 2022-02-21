export class IMovie{
    constructor(Title:string, Year:number, ImdbID:string, Poster:string){
        this.Title = Title;
        this.Year = Year;
        this.ImdbID = ImdbID;
        this.Poster = Poster;
    }

    Title:string;
    Year:number;
    ImdbID:string;
    Poster:string;
}