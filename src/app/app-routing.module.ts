import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeChilrenComponent } from './components/home-chilren/home-chilren.component';
import { RelativerouteComponent } from './components/relativeroute/relativeroute.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home/:id',component:HomeComponent},
  {
    path:'find',
    children:[
      {path:'',component:PageNotFoundComponent},
      {path:'child',component:HomeChilrenComponent},
      // {path:'parent',redirectTo:'/',pathMatch:'full'}
    ]
  },
  {path:'lazyload',loadChildren:()=>import('./components/lazy/home/home.module').then((m)=>m.HomeModule)},
  {path:'relroute',component:RelativerouteComponent},
  // {path:'**',redirectTo:''},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
