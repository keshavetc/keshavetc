import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent_ implements OnInit {
  optionalParam1:any;
  constructor(
    private _route:Router,
    private _getRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.optionalParam1=this._getRoute.snapshot.paramMap.get('optionalParam1');
    console.log('optionalParam1:',this.optionalParam1);    
  }

}
