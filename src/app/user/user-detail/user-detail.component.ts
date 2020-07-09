import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { IUser } from "../iuser";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";
import { flatMap, share, tap } from "rxjs/operators";

/*
* const heroForm = new FormGroup({
  'name': new FormControl(),
  'alterEgo': new FormControl(),
  'power': new FormControl()
}, { validators: identityRevealedValidator });
The validator code is as follows.

shared/identity-revealed.directive.ts
content_copy

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get("name");
  const alterEgo = control.get("alterEgo");

  return name && alterEgo && name.value === alterEgo.value ? {"identityRevealed": true} : null;
};
* */

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: [ "./user-detail.component.scss" ]
})
export class UserDetailComponent implements OnInit {

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
          name: [ "", [ Validators.required, (control: AbstractControl) => {
            const name = control.value;
            return /^unko$/i.test(name) ? {inappropriateName: true} : false;
          } ] ],
          email: [ "", [ Validators.email, Validators.required ] ],
          gender: [ "", [ Validators.pattern(/femal|male/), Validators.required ] ],

          teams: this.fb.array([
            this.fb.control("team1"),
            this.fb.control("team2"),
            this.fb.control("team3"),
          ]),
          career: [ "", [ Validators.maxLength(100) ] ],
          join: [ [ "team1" ] ],
          address: this.fb.group({
            street: [ "",
              [ (control: AbstractControl) => {
                return control.value === "Tokyo" ? {street: true} : null;
              }, Validators.required, Validators.minLength(10), Validators.min(10) ]
            ],
            city: [ "" ],
            state: [ "" ],
            zip: [ "" ]
          })
        });
      })
    ).subscribe();
  }

  patchValue() {
    this.formGroup.patchValue({
      name: "updated name",
      address: {
        city: ""
      }
    });
  }

  getValue() {
    console.log(this.formGroup.get("join"));
    console.log(this.formGroup.get("teams"));
  }

}
