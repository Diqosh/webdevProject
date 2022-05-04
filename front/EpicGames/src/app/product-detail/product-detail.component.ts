import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Game} from "../models";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  game: Game | undefined
  comment: Object | undefined;

  constructor(private service: GameService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getGame()
  }


  getGame(){
    this.route.params.subscribe((params: Params) =>{
      this.service.getGame(+params['id']).subscribe(data =>{
        this.game = data
        // @ts-ignore

        this.category = data.category
        console.log(data)
      })

    })
  }
  getComments(){
    this.route.params.subscribe((params: Params) =>{
      this.service.getReveiws(+params['id']).subscribe(data =>{
        this.comment = data
        // @ts-ignore
        console.log(data)
      })

    })
  }


}
