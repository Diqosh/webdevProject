import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Game} from "../models";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() game: Game | undefined = undefined
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {


  }

  setActive(): void{
    let settings = this.elem.nativeElement.querySelector('.product__settings')
    settings!.classList.toggle('active')
  }

}
