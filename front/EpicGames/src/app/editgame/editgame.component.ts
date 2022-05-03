import {Component, Input, OnInit} from '@angular/core';
import {Category, Game} from "../models";
import {GameService} from "../services/game.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {
  game: Game | undefined
  name = ''
  price: number = 0
  category = ''
  categories: Category[] = []
  constructor(private service: GameService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategories()
    this.getGame()
  }

  getCategories(){
    this.service.getCategories().subscribe(data =>{
        this.categories = data
      }
    )
  }

  getGame(){
    this.route.params.subscribe((params: Params) =>{
      this.service.getGame(+params['id']).subscribe(data =>{
        this.game = data
        // @ts-ignore
        this.name = data.name
        this.price = data.price
        // @ts-ignore
        this.category = data.category
        console.log(data)
      })

    })
  }

  put(){

    this.route.params.subscribe((params: Params) =>{
      this.service.putGame(+params['id'], {
        name: this.name,
        price: this.price,
        category: this.category
      }).subscribe(data =>{
        console.log(data)
        this.router.navigate(['/home'])
      })

    })
  }

}
