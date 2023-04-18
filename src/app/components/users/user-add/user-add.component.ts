import { Component, OnInit } from '@angular/core';

//Importamos el modelo y el service de Usuario
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

//Añadimos la configuración de rutas en Angular
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  user: User = new User();
  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  async addUser(): Promise<void> {
    await this.userService.addUser(this.user).subscribe((data) => {
      this.router.navigate(['/user-list']);
    });
  }
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.userService
        .findById(this.route.snapshot.paramMap.get('id'))
        .subscribe((data) => {
          this.user.id = data.id;
          this.user.name = data.name;
          this.user.lastName = data.lastName;
          this.user.mail = data.mail;
        });
    }
  }
  updateUser(): void {
    this.userService.updateUser(this.user).subscribe((data) => {});
  }
}
