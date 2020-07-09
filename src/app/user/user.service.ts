import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IUser, users } from "./iuser";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor() {
  }

  findAll(): Observable<IUser[]> {
    return of(users);
  }

  findByPk(id: number): Observable<IUser> {
    return of(users.find(u => u.id === id));
  }

}
