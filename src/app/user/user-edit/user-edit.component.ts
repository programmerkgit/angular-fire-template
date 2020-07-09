import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";
import { flatMap, share, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { IUser } from "../iuser";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: [ "./user-edit.component.scss" ]
})
export class UserEditComponent implements OnInit {


  formGroup: FormGroup;
  user$: Observable<IUser>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.user$ = this.activatedRoute.paramMap.pipe(
      flatMap(param => {
        const id = param.get("id") as string;
        return this.userService.findByPk(Number(id));
      }),
      share()
    );
    this.user$.pipe(
      tap(user => {
        this.formGroup = this.fb.group({
          name: [],
          sex: []
        });
      })
    ).subscribe();
  }

}
