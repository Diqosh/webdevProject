import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {Game} from "../models";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  games: Game[] = []
  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.getGames()
  }

  getGames(){
    this.service.getGames().subscribe(data =>{
      this.games = data

    })
  }

}
