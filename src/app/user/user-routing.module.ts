import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDeleteComponent } from "./user-delete/user-delete.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";


const routes: Routes = [
  {path: "create", component: UserCreateComponent},
  {path: ":id/delete", component: UserDeleteComponent},
  {path: ":id/edit", component: UserEditComponent},
  {path: ":id", component: UserDetailComponent},
  {path: "", component: UserListComponent},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {
}
