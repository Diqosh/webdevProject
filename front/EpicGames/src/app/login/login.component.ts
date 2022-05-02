import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {interval, Subscription, takeWhile} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<boolean> = new EventEmitter<boolean>()
  logged = false;
  username = '';
  password = '';
  subscription: Subscription | undefined;

  constructor(private service: UserService,
              private router: Router,
  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

  }

  ngOnInit(): void {


  }

  login() {
    this.service.login(this.username, this.password).subscribe(data => {
      if (data.status == 200){
        console.log('ра')
        localStorage.setItem('token-access', data.body!.access);
        localStorage.setItem('token-refresh', data.body!.refresh);
        console.log(data)
        this.logged = true;
        this.username = '';
        this.password = '';
        this.onLogin.emit(this.logged)
        this.router.navigate(['/home'])
      }

    },error => {

      localStorage.removeItem('token-access');
      localStorage.removeItem('token-refresh');
    });
  }



}
