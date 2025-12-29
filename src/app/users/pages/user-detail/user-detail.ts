import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { UserForm } from "../../components/user-form/user-form";
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'app-user-detail',
  imports: [ProgressSpinnerModule, UserForm],
  templateUrl: './user-detail.html',
})
export class UserDetail {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  userService = inject(UsersService)

  userId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  );

  userResource = rxResource({
    params: () => ({ id: this.userId() }),
    stream: ({ params }) => {
      return this.userService.getUserById(params.id);
    },
  });

  redirectEffect = effect(() => {
    if (this.userResource.error()) {
      this.router.navigate(['/users/list']);
    }
  });

}
