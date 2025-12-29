import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserTable } from "../../components/user-table/user-table";
import { Pagination } from "../../../shared/components/pagination/pagination";
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { User } from '../../interfaces/user.interface.response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  imports: [UserTable, Pagination],
  templateUrl: './user-list.html',
})
export class UserList {

  usersService = inject(UsersService);
  paginationService = inject(PaginationService);
  router = inject(Router);

  usersResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage(), limit: this.paginationService.limitPerPage() }),
    stream: ({ params }) => {
      return this.usersService.getUsers({
        offset: (params.page - 1) * params.limit,
        limit: params.limit
      });
    },
  });

  editUser(user: User) {
    this.router.navigate(['/users/detail', user.id]);
  }

  deleteUser(user: User) {
    // this.usersService.deleteUser(user.id).subscribe(() => {
    //   this.usersResource.reload();
    // });
  }

}