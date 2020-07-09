import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { IUser, UserKeys, users } from "../iuser";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: [ "./user-list.component.scss" ]
})
export class UserListComponent implements OnInit {

  @Input() users: any = users;
  dataSource: MatTableDataSource<IUser>;
  displayedColumns = UserKeys.concat([ "detail", "edit", "delete" ]);
  userKeys = UserKeys;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  pageSizeOptions = [ 5, 50, 100 ];
  pageSize = 10;
  length = 20;

  constructor() {
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.value.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
