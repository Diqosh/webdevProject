import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "../models";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URl= 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<HttpResponse<AuthToken>> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/token/`, {
      username,
      password
    },
      {observe: 'response'});
  }
}
