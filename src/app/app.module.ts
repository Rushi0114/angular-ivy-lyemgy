import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, UserLoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService,AuthenticationService]
})
export class AppModule { }
