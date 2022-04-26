import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  BASE_URl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.BASE_URl}/api/products`);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
