import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

//Display header dada
  headerDisplay:any = [];

  ngOnInit(): void {
    
    this._services.header().subscribe((result)=> {
      console.log(result);
      this.headerDisplay = result.articles;
    })
    
  }

}
