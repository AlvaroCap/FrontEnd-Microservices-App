import { Component, OnInit } from '@angular/core';

//Importamos el modelo y el service de Usuario
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

//Añadimos la configuración de rutas en Angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  constructor(private router: Router, private userService: UserService) {}

  //Al iniciar la aplicación se usará eventos
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }

  //Método para eliminar el usuario según su id
  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe((data) => {
      this.userList = this.userList.filter((u) => u !== user);
    });
  }
}
