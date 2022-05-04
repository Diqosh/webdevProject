import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Game} from "../models";
import {GameService} from "../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() game: Game | undefined = undefined
  constructor(private elem: ElementRef,
              private service: GameService,
              private router: Router) { }

  ngOnInit(): void {


  }

  setActive(): void{
    let settings = this.elem.nativeElement.querySelector('.product__settings')
    settings!.classList.toggle('active')
  }


  deleteGame(id: number): void{
    this.service.deleteGame(id).subscribe(data =>{
      window.location.reload();
    })

  }
  addGame(game: number):void {
    this.service.addWhishlistItem(game,this.getUserId()).subscribe(data =>{

    })
  }
  getUserId() {
    // @ts-ignore
    return this.userId = JSON.parse(window.atob(localStorage.getItem('token-access').split('.')[1])).user_id
  }
}
