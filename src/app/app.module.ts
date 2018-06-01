import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialImportModule} from './material-import/material-import.module';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './client/client.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './user/user.component';
import {ScopeComponent} from './scope/scope.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {DetailUserComponent} from './user/detail-user/detail-user.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {CreateClientComponent} from './client/create-client/create-client.component';
import {EditClientComponent} from './client/edit-client/edit-client.component';
import {DetailClientComponent} from './client/detail-client/detail-client.component';
import {ServiceModule} from './service/service.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    ClientComponent,
    PageNotFoundComponent,
    UserComponent,
    ScopeComponent,
    EditUserComponent,
    DetailUserComponent,
    CreateUserComponent,
    CreateClientComponent,
    EditClientComponent,
    DetailClientComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportModule,
    BrowserAnimationsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
