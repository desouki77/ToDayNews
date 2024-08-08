import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }
  businessnewsDisplay:any = [];

  ngOnInit(): void {



      this._services.businessNews().subscribe(result => {

        this.businessnewsDisplay=result.articles;
      });
  }

}
