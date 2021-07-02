import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:any=0;
  page:any;
  constructor(
    private _route:Router,
    private _getRoute:ActivatedRoute
    ) {
        
     }

  ngOnInit(): void {
    this.id=+this._getRoute.snapshot.paramMap.get('id');
    this.page=this._getRoute.snapshot.queryParamMap.get('page');
    console.log('Old Param:',this.id);
    this._getRoute.paramMap.subscribe((param)=>{
        console.log('New Param:',param.get('id'));
    });
  }

  lazyload(){
        this._route.navigate(['lazyload',{optionalParam1:'value'}]);
  }


  nextId(){
      this.id++;
      this._route.navigate(['home',this.id]);
  }

  childLoad(){
    this._route.navigate(['find/child']);
  }

}
