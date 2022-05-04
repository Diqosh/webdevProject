import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category, Game, Whishlist} from "../models";
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
    return this.http.get<Game>(`${this.BASE_URl}/api/products/${id}`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URl}/api/categories`);
  }

  postGame(game: { name: string; price: string; category: string}){
    return this.http.post(`${this.BASE_URl}/api/products/`, game);
  }

  putGame(id: number, game: { price: number; name: string; category: string }){
    return this.http.put(`${this.BASE_URl}/api/products/${id}`, game);
  }
  deleteGame(id: number){
    return this.http.delete(`${this.BASE_URl}/api/products/${id}`);
  }

  getWhishlist(user_id : number){
    return this.http.get<Whishlist[]>(`${this.BASE_URl}/api/whishlist/${user_id}`);
  }
  deleteWhishlistItem(items: any){

    return this.http.delete(
      `${this.BASE_URl}/api/whishlist/${items.user_id}/${items.game_id}`
    );
  }
  addWhishlistItem(game_id: number, user_id: number){
    return this.http.post(
      `${this.BASE_URl}/api/whishlist/${user_id}/${game_id}`,{
  }
);
}

}
