import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PjpfComponent } from './pages/pjpf/pjpf.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculadoraPjPfComponent } from './components/calculadora-pj-pf/calculadora-pj-pf.component';
import { CalculadoraPjComponent } from './components/calculadora-pj/calculadora-pj.component';
import { CalculadoraPfComponent } from './components/calculadora-pf/calculadora-pf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PjpfComponent,
    MenuComponent,
    HomeComponent,
    CalculadoraPjPfComponent,
    CalculadoraPjComponent,
    CalculadoraPfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
