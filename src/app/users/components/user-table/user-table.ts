import { Component, input, output } from '@angular/core';
import { User, UsersResponse } from '../../interfaces/user.interface.response';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-user-table',
  imports: [TableModule, TagModule, ButtonModule, DatePipe],
  templateUrl: './user-table.html',
})
export class UserTable {

  users = input.required<User[]>();
  edit = output<User>();
  delete = output<User>();

} 
