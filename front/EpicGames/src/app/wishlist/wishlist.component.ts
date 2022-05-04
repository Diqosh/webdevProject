import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {Game} from "../models";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  // @ts-ignore
  userId : number
  games: Game[] = []
  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.getUserId()

    this.getWhishlist()
  }
  getUserId(){
    // @ts-ignore
    this.userId = JSON.parse(window.atob(localStorage.getItem('token-access').split('.')[1])).user_id

  }
  getWhishlist(){


    this.service.getWhishlist(this.userId).subscribe(data =>{

      this.games = data[0].product_id

    })
  }

  removeGame(id: number) {

  }
}
