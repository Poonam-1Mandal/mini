import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule}from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import {FormsModule  } from '@angular/forms';
import { ImagesearchComponent } from './imagesearch/imagesearch.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
   RegisterComponent,
    ServicesComponent,
    FooterComponent,
    ImagesearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(
      [
        {path:"home",component:HomeComponent},
        {path:"login",component:LoginComponent},
        {path:"imagesearch",component:ImagesearchComponent},
        {path:"register",component:RegisterComponent},
        {path:"services",component:ServicesComponent},
        {path:"user",component:UserComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
