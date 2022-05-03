import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Game} from "../models";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() game: Game | undefined = undefined
  constructor(private elem: ElementRef,
              private service: GameService) { }

  ngOnInit(): void {


  }

  setActive(): void{
    let settings = this.elem.nativeElement.querySelector('.product__settings')
    settings!.classList.toggle('active')
  }


  deleteGame(id: number): void{
    this.service.deleteGame(id).subscribe(data =>{
      console.log(data)
    })
  }

}
