import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {Category, Game} from "../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  name = ''
  price = ''
  category = ''


  // @ts-ignore
  token : string = localStorage.getItem('token-access')
  categories: Category[] = []

  constructor(private service: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.service.getCategories().subscribe(data =>{

        this.categories = data
      }
    )
  }
  post(){

    console.log(this.price, this.name, this.category)
      this.service.postGame({
        name: this.name,
        price: this.price,
        category: this.category
      }).subscribe(data =>{
        console.log(data)
        this.router.navigate(['/home'])
      })
  }


}
