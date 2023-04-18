import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Añado los componentes que voy a utilizar
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserModifyComponent } from './components/users/user-modify/user-modify.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventAddComponent } from './components/events/event-add/event-add.component';
import { EventModifyComponent } from './components/events/event-modify/event-modify.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'user-add',
    component: UserAddComponent,
  },
  {
    path: 'user-modify/:id',
    component: UserModifyComponent,
  },
  {
    path: 'event-list',
    component: EventListComponent,
  },
  {
    path: 'event-add',
    component: EventAddComponent,
  },
  {
    path: 'event-modify/:id',
    component: EventModifyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
