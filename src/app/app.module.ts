import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { MainModule } from './modules/main.module';
import {MatCardModule} from '@angular/material/card';




const modules = [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MainModule, CommonModule, MatCardModule, HttpClientModule];

@NgModule({
  declarations: [AppComponent, ],
  imports: modules ,
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}