import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Component404Component } from './component404/component404.component';
import { GuardService } from './auth/guard.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    DashboardComponent,
    LoginComponent,
    Component404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, GuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
