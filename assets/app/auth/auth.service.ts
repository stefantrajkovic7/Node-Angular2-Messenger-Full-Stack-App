import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

import { User } from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
              this.errorService.handleError(error.json());
              return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
              this.errorService.handleError(error.json());
              return Observable.throw(error.json());
            });
    }

    logout() {
      localStorage.clear();
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }symbol
}
