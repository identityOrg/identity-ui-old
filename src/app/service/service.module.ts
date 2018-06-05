import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {ClientService} from './client.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [LoginService, UserService, ClientService]
})
export class ServiceModule {
}
