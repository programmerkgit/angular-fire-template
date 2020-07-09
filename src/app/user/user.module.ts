import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserDeleteComponent } from "./user-delete/user-delete.component";
import { UserRoutingModule } from "./user-routing.module";
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [ UserListComponent, UserDetailComponent, UserEditComponent, UserDeleteComponent, UserCreateComponent, UserComponent ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
