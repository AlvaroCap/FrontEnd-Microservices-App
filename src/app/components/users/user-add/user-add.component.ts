import { Component } from '@angular/core';

//Importamos el modelo y el service de Usuario
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

//Añadimos la configuración de rutas en Angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  user: User = new User();
  constructor(private router: Router, private userService: UserService) {}
  addUser(): void {
    this.userService.addUser(this.user).subscribe((data) => {});
  }
}
