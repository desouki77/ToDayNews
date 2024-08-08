import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }
  sportsnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.sportsNews().subscribe(result => {

      this.sportsnewsDisplay=result.articles;
    });
  }

}
