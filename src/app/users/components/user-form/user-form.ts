import { Component, input } from '@angular/core';
import { User } from '../../interfaces/user.interface.response';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user-form',
  imports: [FluidModule, InputTextModule],
  templateUrl: './user-form.html',
})
export class UserForm {

  user = input.required<User>();

}
