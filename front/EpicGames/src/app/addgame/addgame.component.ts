import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {Category, Game} from "../models";

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {
  categories: Category[] = []
  constructor(private service: GameService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.service.getCategories().subscribe(data =>{
      this.categories = data
      }
    )
  }


}
