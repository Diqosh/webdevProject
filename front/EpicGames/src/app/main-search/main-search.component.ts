import {Component, ElementRef, OnInit} from '@angular/core';
import {GameService} from "../services/game.service";
import {Category, Game} from "../models";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  games: Game[] = []
  categories: Category[] = []
  constructor(private service: GameService,
              private elem: ElementRef,) { }

  ngOnInit(): void {
    this.getGames()
    this.getCategories()
  }

  getGames(){
    this.service.getGames().subscribe(data =>{
      this.games = data

    })
  }
  getCategories(){
    this.service.getCategories().subscribe(data =>{
        this.categories = data
      }
    )
  }

  setActive() {
    let cat = document.querySelector('.cat')
    cat!.querySelector('.cat-list')!.classList.toggle('active')


  }
}
