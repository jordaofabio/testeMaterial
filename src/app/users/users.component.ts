import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }
  sortedData: any[] = [];

    displayedColumns: string[] = ['name', 'email', 'phone', 'level', 'enabled'];
    dataSource: any = {};

  ngOnInit() {
    this.sortedData.push(
        {
          id: 1,
          firstname: 'Fabio',
          lastname: 'Jordão',
          email: 'fabio@gmail.com',
          phone: 9999999999999,
          level: 2,
          enabled: true
        },
        {
          id: 2,
          firstname: 'Jac',
          lastname: 'Jordão',
          email: 'sfsdf@gmail.com',
          phone: 8888888888888,
          level: 0,
          enabled: false
        },
        {
          id: 3,
          firstname: 'Tito',
          lastname: 'Jordão',
          email: 'bolinha@gmail.com',
          phone: 498498498498498484,
          level: 2,
          enabled: true
        }
    );
    this.dataSource = this.sortedData;
  }

}
