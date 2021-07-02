import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeChilrenComponent } from './components/home-chilren/home-chilren.component';
import { RelativerouteComponent } from './components/relativeroute/relativeroute.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeChilrenComponent,
    RelativerouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
