import { Injectable } from '@angular/core';

//Importamos el modelo de los usuarios
import { User } from '../models/user';

//Importamos la configuración HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private userUrl = 'http://localhost:8081/user';

  //Creamos la funcion getUsers para obtener un array con los usuarios de la base de datos
  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  //Función en service para eliminar un usuario
  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + '/delete/' + user.id);
  }

  //Función en service para añadir un usuario
  public addUser(user: User) {
    return this.http.post<User>(this.userUrl + '/save', user);
  }

  //Función en service para modificar el usuario
  public updateUser(user: User) {
    return this.http.put<User>(this.userUrl, user);
  }

  //Función en service para encotrar al usuario por su identificador
  public findById(id: any) {
    return this.http.get<User>(this.userUrl + '/' + id);
  }
}
