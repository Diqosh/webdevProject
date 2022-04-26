import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";

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

  constructor(private service: UserService) {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.service.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token-access', data.access);
      localStorage.setItem('token-refresh', data.refresh);
      console.log(data)
      this.logged = true;
      this.username = '';
      this.password = '';
      this.onLogin.emit(this.logged)
    });
  }




}
