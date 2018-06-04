import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './client/client.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {DetailUserComponent} from './user/detail-user/detail-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {CreateClientComponent} from './client/create-client/create-client.component';
import {EditClientComponent} from './client/edit-client/edit-client.component';
import {DetailClientComponent} from './client/detail-client/detail-client.component';
import {ScopeComponent} from './scope/scope.component';
import {LoginGuard} from './security/login.guard';
import {LogoutGuard} from './security/logout.guard';
import {LogoutComponent} from './logout/logout.component';
import {CallbackComponent} from './security/callback/callback.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard]},
  {
    path: 'client', children: [
      {path: '', pathMatch: 'full', component: ClientComponent, canActivate: [LoginGuard]},
      {path: 'create', component: CreateClientComponent, canActivate: [LoginGuard]},
      {path: 'detail/:clientId', component: DetailClientComponent, canActivate: [LoginGuard]},
      {path: 'edit/:clientId', component: EditClientComponent, canActivate: [LoginGuard]}
    ]
  },
  {
    path: 'user', children: [
      {path: '', pathMatch: 'full', component: UserComponent, canActivate: [LoginGuard]},
      {path: 'create', component: CreateUserComponent, canActivate: [LoginGuard]},
      {path: 'detail/:clientId', component: DetailUserComponent, canActivate: [LoginGuard]},
      {path: 'edit/:clientId', component: EditUserComponent, canActivate: [LoginGuard]}
    ]
  },
  {path: 'scope', component: ScopeComponent, canActivate: [LoginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [LogoutGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: PageNotFoundComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, LogoutGuard]
})
export class AppRoutingModule {
}
