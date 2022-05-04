import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {Game} from "../models";




@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.css']
})
export class ProductsWrapperComponent implements OnInit {
  isLoaded: boolean = false
  games: Game[] = []

  constructor(private service: GameService) { }

  ngOnInit(): void {

    if(!localStorage.getItem('token-access')){
      this.isLoaded = false
    }else {
      this.getGames()
    }

  }

  getGames(){
    this.service.getGames().subscribe(data =>{
      this.games = data
      this.isLoaded = true
    })
  }

}
