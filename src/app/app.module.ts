import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { EventAddComponent } from './components/events/event-add/event-add.component';
import { EventListComponent } from './components/events/event-list/event-list.component';

//Importamos el servicio User
import { UserService } from './services/user.service';

//Importamos la configuración para la conexión http
import { HttpClientModule } from '@angular/common/http';

//Importamos los formularios de Angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    EventListComponent,
    EventAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //Configuracion Nueva
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
