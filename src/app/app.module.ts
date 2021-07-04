import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeChilrenComponent } from './components/home-chilren/home-chilren.component';
import { RelativerouteComponent } from './components/relativeroute/relativeroute.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildElementModule } from './component/child-element/child-element.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeChilrenComponent,
    RelativerouteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChildElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
