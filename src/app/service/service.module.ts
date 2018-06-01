import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [LoginService]
})
export class ServiceModule {
}
