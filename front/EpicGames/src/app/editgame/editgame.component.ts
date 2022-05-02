import { Component, OnInit } from '@angular/core';
import {Category} from "../models";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {

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
