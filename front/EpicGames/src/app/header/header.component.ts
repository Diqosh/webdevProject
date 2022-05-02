import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token-access')){
      this.isLogged = true
    }
  }

  logout() {

    localStorage.removeItem('token-access');
    localStorage.removeItem('token-refresh');
  }

}
