import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  Url = "http://127.0.0.1:5000";

  queryData(station:string, month:string, year:string){
    return this.http.get(this.Url+`/query/data?station=${station}&month=${month}&year=${year}`);
  }

  listDMY(DMY:string){
    return this.http.get(this.Url+`/find/dmy?DayMonthYear=${DMY}`);
  }

  listStation(){
    return this.http.get(this.Url+"/find/station");
  }
}